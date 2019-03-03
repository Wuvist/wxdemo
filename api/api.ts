export interface input {
	x: number 
	y: number 
}

export interface output {
	x: number 
}

export function add(params: input): output {
	return { x: params.x + params.y}
}


function call<InType, OutType>(url: string, input: InType): Promise<OutType> {
	return new Promise<OutType>((resolve, reject) => {wx.request({
		url: url,
		method: "POST",
		data: input,
		header: {
		  'content-type': 'application/json' // 默认值
		},
		success(res: wx.RequestSuccessCallbackResult) : void {
			if(res.statusCode == 200){
				console.log("res.data");
				console.log(res.data);
				resolve(res.data as OutType);
			} else {
				reject(res.data);
			}
		},
	})});
}

export interface GetBookReq {
	id: number
}

export interface Book {
	kind: "Book";
	title: string
	author: string
}

export function GetBook(params: GetBookReq): Promise<Book> {
	return call("http://localhost:8080/books.get", params)
}


function callback<InType, OutType, ErrType>(url: string, input: InType, cb: (out: OutType) => void, err_back: (err: ErrType) => void): wx.RequestTask {
	return wx.request({
		url: url,
		method: "POST",
		data: input,
		header: {
		  'content-type': 'application/json' // 默认值
		},
		success(res: wx.RequestSuccessCallbackResult) : void {
			if(res.statusCode== 200){
				cb(res.data as OutType);
			} else {
				err_back(res.data as ErrType);
			}
		},
	});
}

async function call_async<InType, OutType, ErrType>(url: string, input: InType): Promise<OutType|ErrType> {
	return new Promise<OutType|ErrType>((resolve, reject) => {wx.request({
		url: url,
		method: "POST",
		data: input,
		header: {
		  'content-type': 'application/json' // 默认值
		},
		success(res: wx.RequestSuccessCallbackResult) : void {
			if(res.statusCode== 200){
				resolve(res.data as OutType);
			} else if(res.statusCode== 400) {
				resolve(res.data as ErrType);
			} else {
				reject(res.data);
			}
		},
	})});
}

// type GetBookResult = Book|GetBookErr;
export async function GetBookAsync(params: GetBookReq): Promise<Book|GetBookErr> {
	return call_async<GetBookReq,Book, GetBookErr>("http://localhost:8080/books.get", params);
}


export interface GetBookErr {
	kind: "GetBookErr";
	msg: string
}

export function GetBook_with_callback(params: GetBookReq, cb: (res: Book) => void, err_back: (err: GetBookErr)=> void): wx.RequestTask {
	return callback("http://localhost:8080/books.get", params, cb, err_back);
}
