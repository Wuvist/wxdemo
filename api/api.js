"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function add(params) {
    return { x: params.x + params.y };
}
exports.add = add;
function call(url, input) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: "POST",
            data: input,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                if (res.statusCode == 200) {
                    console.log("res.data");
                    console.log(res.data);
                    resolve(res.data);
                }
                else {
                    reject(res.data);
                }
            },
        });
    });
}
function GetBook(params) {
    return call("http://localhost:8080/books.get", params);
}
exports.GetBook = GetBook;
function callback(url, input, cb, err_back) {
    return wx.request({
        url: url,
        method: "POST",
        data: input,
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            if (res.statusCode == 200) {
                cb(res.data);
            }
            else {
                err_back(res.data);
            }
        },
    });
}
function call_async(url, input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) {
                    wx.request({
                        url: url,
                        method: "POST",
                        data: input,
                        header: {
                            'content-type': 'application/json'
                        },
                        success: function (res) {
                            if (res.statusCode == 200) {
                                resolve(res.data);
                            }
                            else if (res.statusCode == 400) {
                                resolve(res.data);
                            }
                            else {
                                reject(res.data);
                            }
                        },
                    });
                })];
        });
    });
}
function GetBookAsync(params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, call_async("http://localhost:8080/books.get", params)];
        });
    });
}
exports.GetBookAsync = GetBookAsync;
function GetBook_with_callback(params, cb, err_back) {
    return callback("http://localhost:8080/books.get", params, cb, err_back);
}
exports.GetBook_with_callback = GetBook_with_callback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxTQUFnQixHQUFHLENBQUMsTUFBYTtJQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFBO0FBQ2pDLENBQUM7QUFGRCxrQkFFQztBQUdELFNBQVMsSUFBSSxDQUFrQixHQUFXLEVBQUUsS0FBYTtJQUN4RCxPQUFPLElBQUksT0FBTyxDQUFVLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzVELEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBb0M7Z0JBQzNDLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQWUsQ0FBQyxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtZQUNGLENBQUM7U0FDRCxDQUFDLENBQUE7SUFBQSxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFZRCxTQUFnQixPQUFPLENBQUMsTUFBa0I7SUFDekMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDdkQsQ0FBQztBQUZELDBCQUVDO0FBR0QsU0FBUyxRQUFRLENBQTJCLEdBQVcsRUFBRSxLQUFhLEVBQUUsRUFBMEIsRUFBRSxRQUFnQztJQUNuSSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDakIsR0FBRyxFQUFFLEdBQUc7UUFDUixNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFO1lBQ04sY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELE9BQU8sRUFBUCxVQUFRLEdBQW9DO1lBQzNDLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBRyxHQUFHLEVBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBZSxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ04sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFlLENBQUMsQ0FBQzthQUM5QjtRQUNGLENBQUM7S0FDRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBZSxVQUFVLENBQTJCLEdBQVcsRUFBRSxLQUFhOzs7WUFDN0UsV0FBTyxJQUFJLE9BQU8sQ0FBa0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUNwRSxHQUFHLEVBQUUsR0FBRzt3QkFDUixNQUFNLEVBQUUsTUFBTTt3QkFDZCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxNQUFNLEVBQUU7NEJBQ04sY0FBYyxFQUFFLGtCQUFrQjt5QkFDbkM7d0JBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBb0M7NEJBQzNDLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBRyxHQUFHLEVBQUM7Z0NBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBZSxDQUFDLENBQUM7NkJBQzdCO2lDQUFNLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBRyxHQUFHLEVBQUU7Z0NBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBZSxDQUFDLENBQUM7NkJBQzdCO2lDQUFNO2dDQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2pCO3dCQUNGLENBQUM7cUJBQ0QsQ0FBQyxDQUFBO2dCQUFBLENBQUMsQ0FBQyxFQUFDOzs7Q0FDTDtBQUdELFNBQXNCLFlBQVksQ0FBQyxNQUFrQjs7O1lBQ3BELFdBQU8sVUFBVSxDQUE4QixpQ0FBaUMsRUFBRSxNQUFNLENBQUMsRUFBQzs7O0NBQzFGO0FBRkQsb0NBRUM7QUFRRCxTQUFnQixxQkFBcUIsQ0FBQyxNQUFrQixFQUFFLEVBQXVCLEVBQUUsUUFBa0M7SUFDcEgsT0FBTyxRQUFRLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxRSxDQUFDO0FBRkQsc0RBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIGlucHV0IHtcclxuXHR4OiBudW1iZXIgXHJcblx0eTogbnVtYmVyIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG91dHB1dCB7XHJcblx0eDogbnVtYmVyIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmFtczogaW5wdXQpOiBvdXRwdXQge1xyXG5cdHJldHVybiB7IHg6IHBhcmFtcy54ICsgcGFyYW1zLnl9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxsPEluVHlwZSwgT3V0VHlwZT4odXJsOiBzdHJpbmcsIGlucHV0OiBJblR5cGUpOiBQcm9taXNlPE91dFR5cGU+IHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2U8T3V0VHlwZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge3d4LnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsXHJcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0ZGF0YTogaW5wdXQsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdCAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzKHJlczogd3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgOiB2b2lkIHtcclxuXHRcdFx0aWYocmVzLnN0YXR1c0NvZGUgPT0gMjAwKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInJlcy5kYXRhXCIpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhIGFzIE91dFR5cGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlamVjdChyZXMuZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fSl9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXRCb29rUmVxIHtcclxuXHRpZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9vayB7XHJcblx0a2luZDogXCJCb29rXCI7XHJcblx0dGl0bGU6IHN0cmluZ1xyXG5cdGF1dGhvcjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRCb29rKHBhcmFtczogR2V0Qm9va1JlcSk6IFByb21pc2U8Qm9vaz4ge1xyXG5cdHJldHVybiBjYWxsKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Jvb2tzLmdldFwiLCBwYXJhbXMpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxsYmFjazxJblR5cGUsIE91dFR5cGUsIEVyclR5cGU+KHVybDogc3RyaW5nLCBpbnB1dDogSW5UeXBlLCBjYjogKG91dDogT3V0VHlwZSkgPT4gdm9pZCwgZXJyX2JhY2s6IChlcnI6IEVyclR5cGUpID0+IHZvaWQpOiB3eC5SZXF1ZXN0VGFzayB7XHJcblx0cmV0dXJuIHd4LnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsXHJcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0ZGF0YTogaW5wdXQsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdCAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzKHJlczogd3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgOiB2b2lkIHtcclxuXHRcdFx0aWYocmVzLnN0YXR1c0NvZGU9PSAyMDApe1xyXG5cdFx0XHRcdGNiKHJlcy5kYXRhIGFzIE91dFR5cGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGVycl9iYWNrKHJlcy5kYXRhIGFzIEVyclR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjYWxsX2FzeW5jPEluVHlwZSwgT3V0VHlwZSwgRXJyVHlwZT4odXJsOiBzdHJpbmcsIGlucHV0OiBJblR5cGUpOiBQcm9taXNlPE91dFR5cGV8RXJyVHlwZT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZTxPdXRUeXBlfEVyclR5cGU+KChyZXNvbHZlLCByZWplY3QpID0+IHt3eC5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdGRhdGE6IGlucHV0LFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHQgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzcyhyZXM6IHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpIDogdm9pZCB7XHJcblx0XHRcdGlmKHJlcy5zdGF0dXNDb2RlPT0gMjAwKXtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhIGFzIE91dFR5cGUpO1xyXG5cdFx0XHR9IGVsc2UgaWYocmVzLnN0YXR1c0NvZGU9PSA0MDApIHtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhIGFzIEVyclR5cGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlamVjdChyZXMuZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fSl9KTtcclxufVxyXG5cclxuLy8gdHlwZSBHZXRCb29rUmVzdWx0ID0gQm9va3xHZXRCb29rRXJyO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0Qm9va0FzeW5jKHBhcmFtczogR2V0Qm9va1JlcSk6IFByb21pc2U8Qm9va3xHZXRCb29rRXJyPiB7XHJcblx0cmV0dXJuIGNhbGxfYXN5bmM8R2V0Qm9va1JlcSxCb29rLCBHZXRCb29rRXJyPihcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ib29rcy5nZXRcIiwgcGFyYW1zKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0Qm9va0VyciB7XHJcblx0a2luZDogXCJHZXRCb29rRXJyXCI7XHJcblx0bXNnOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEJvb2tfd2l0aF9jYWxsYmFjayhwYXJhbXM6IEdldEJvb2tSZXEsIGNiOiAocmVzOiBCb29rKSA9PiB2b2lkLCBlcnJfYmFjazogKGVycjogR2V0Qm9va0Vycik9PiB2b2lkKTogd3guUmVxdWVzdFRhc2sge1xyXG5cdHJldHVybiBjYWxsYmFjayhcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ib29rcy5nZXRcIiwgcGFyYW1zLCBjYiwgZXJyX2JhY2spO1xyXG59XHJcbiJdfQ==