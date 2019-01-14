const app = getApp()
var timeGroup = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myheight: '',
    textContent: '',
    type:1,
    chatList:[{
      avtar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
      content:'最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么',
      id:1
    }, {
        avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
        content: '最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么最近好点儿了没有啊？按时吃药了么',
        id: 2
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '提示',
      content: '敬请期待',
      showCancel: false,
      cancelText: '',
      cancelColor: '',
      confirmText: '好的',
      confirmColor: '',
      success: function(res) {
        wx.navigateBack({
          delta: 1,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.showLoading({
    //   title: '正在链接...',
    //   mask: true,
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
    // if (timeGroup) {
    //   clearInterval(timeGroup)
    //   timeGroup = null
    //   wx.closeSocket({
    //     success: () => {

    //     }
    //   })
    // }
    // var that = this
    // wx.setNavigationBarTitle({
    //   title: options.name,
    // })
    // this.setData({
    //   myId: app.globalData.user_token,
    //   doctorId: options.doctorId
    // })

    // this.getHeight(118)
    // wx.connectSocket({
    //   url: 'wss://114.115.205.226:8888',
    // })
    // wx.onSocketOpen(function (res) {
    //   wx.hideLoading()
    //   var jsonData = {
    //     RequestCode: 10000,
    //     token: app.globalData.user_token,
    //     message:'请求登陆',
    //     user_doctor_id: options.doctorId
    //   }
    //   wx.sendSocketMessage({
    //     data: JSON.stringify(jsonData),
    //     success: function (res) { },
    //     fail: function () { },
    //     complete: function () {

    //     }
    //   })
    // })
    // wx.onSocketMessage(function (e) {
    //   var result = JSON.parse(e.data);
    //   if (result.status == 'success') {
    //     if (result.ResponseCode == 10000) {
    //       app.configure.mytoast('连接成功!')
    //       if (timeGroup) {
    //         clearInterval(timeGroup)
    //         timeGroup = null
    //       }
    //     } else if (result.ResponseCode == 10002){
    //       let list = {
    //         // time: app.configure.timeFormatNotime(new Date().getTime()),
    //         time: app.configure.timeFormatNotime(result.time),
    //         avatar: app.globalData.userInfo.avatar,
    //         id: result.user_doctor_id,
    //         content: result.message,
    //         img: '',
    //         nickName: app.globalData.userInfo.nickname
    //       }
    //       let newList = that.data.chatList
    //       newList.push(list),
    //         that.setData({
    //           chatList: newList,
    //         })
    //       setTimeout(() => {
    //         that.setData({
    //           myTop: newList.length - 1,
    //         })
    //       }, 300)
    //     }else{
    //       app.configure.mytoast('链接失败!')
    //     }
        
    //   }else {
    //     app.configure.mytoast(result.msg)
    //   }
    // })
    // wx.onSocketClose(function (res) {
    //   if (timeGroup) {
    //     clearInterval(timeGroup)
    //     timeGroup = null
    //   }
    // })
    // wx.onSocketError(function (res) {
    //   if (timeGroup) {
    //     clearInterval(timeGroup)
    //     timeGroup = null
    //   }
    // })
  },
  /**
 * 获取系统高度
 */
  getHeight(h) {
    app.configure.rem(h, (res) => {
      this.setData({
        myheight: res
      })
    })
  },
  //登陆
  login() {
    var jsonData = JSON.stringify({
      'action': 'login ',
      'client_type': 'm',
      'client_id': app.globalData.userInfo.id,
      'nickname': app.globalData.userInfo.nickname,
      'avatar': app.globalData.userInfo.avatar,
      'to_user_id': this.data.getInfo.id,
      'categories_id': this.data.getInfo.categorys_id
    })
    wx.sendSocketMessage({
      data: jsonData,
      success: function (res) {

      },
      fail: function () {
        
      },
      complete: function () {

      }
    })
  },
  //获取文字
  getContent(e) {
    this.setData({
      textContent: e.detail.value
    })
  },
  //发送文字
  send() {
    let that = this
    if (that.data.myId != undefined && that.data.myId != null && that.data.myId != '') {
      if (that.data.textContent != '') {
        var jsonData = {
          RequestCode: 10000,
          token: this.data.myId,
          message: that.data.textContent,
          user_doctor_id: this.data.doctorId
        }
        wx.sendSocketMessage({
          data: JSON.stringify(jsonData),
          success: function (res) {
            let list = {
              time: app.configure.timeFormatNotime(new Date().getTime()),
              avatar: app.globalData.userInfo.avatar,
              id: app.globalData.userInfo.id,
              content: that.data.textContent,
              img: '',
              nickName: app.globalData.userInfo.nickname
            }
            let newList = that.data.chatList
            newList.push(list),
              that.setData({
                chatList: newList,
              })
            setTimeout(() => {
              that.setData({
                myTop: newList.length - 1,
              })
            }, 300)
            that.setData({
              textContent: ''
            })
          },
          fail: function () {

          },
          complete: function () {

          }
        })
      }
    } else {
      app.configure.mytoast('暂未连接成功')
    }



  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.setNavigationBarTitle({
    //   title: '医生问答',
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.closeSocket({
      success: () => {

      }
    })
    if (timeGroup) {
      clearInterval(timeGroup)
      timeGroup = null

    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})