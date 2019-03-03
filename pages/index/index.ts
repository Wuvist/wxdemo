//index.js
//获取应用实例
import { IMyApp } from '../../app'
import * as api from '../../api/api'

const app = getApp<IMyApp>()

Page({
	data: {
		motto: '点击<编译>以构建',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
	},
	//事件处理函数
	bindViewTap() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	onLoad() {
		if (app.globalData.userInfo) {
			this.setData!({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true,
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = (res) => {
				this.setData!({
					userInfo: res,
					hasUserInfo: true
				})
			}
		} else {

			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData!({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},

	async getData(e: any) {
		console.log(e)
		let req:api.GetBookReq = {
			 id:1,
		};

		api.GetBook_with_callback(req, res => {
			console.log(res.author);
		}, err => {
			console.log(err.msg)
		});

		let res = await api.GetBookAsync(req);
		switch(res.kind) {
			case "Book":
				console.log(res.author)
				break;
			case "GetBookErr":
				console.log(res.msg);
				break;
		}

		api.GetBook(req).then(res => {
			console.log(res.author)
		}).catch(err => {
			console.log(err)
		})
	},

	getUserInfo(e: any) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData!({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
