const app = getApp()
var timeGroup = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myheight: '',
    textContent: '',
    uid:1,
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
    wx.showLoading({
      title: '正在链接...',
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    if (timeGroup) {
      clearInterval(timeGroup)
      timeGroup = null
      wx.closeSocket({
        success: () => {

        }
      })
    }
    var that = this
    // let all = JSON.parse(app.globalData.getInfo)
    all.create_time = app.time(new Date(all.create_time))
    // wx.setNavigationBarTitle({
    //   title: all.nickname,
    // })
    this.setData({
      // getInfo: all,
      myId: app.globalData.userInfo.id
    })

    this.getHeight(118)
    wx.connectSocket({
      url: 'wss://imtest.tuoketong.com/wss',
    })
    wx.onSocketOpen(function (res) {
      wx.hideLoading()
      var jsonData = {
        action: 'login',
        client_type: 'm',
        client_id: app.globalData.userInfo.id,
        nickname: app.globalData.userInfo.nickname,
        avatar: app.globalData.userInfo.avatar,
        to_user_id: that.data.getInfo.id,
        categories_id: that.data.getInfo.categorys_id
      }
      wx.sendSocketMessage({
        data: JSON.stringify(jsonData),
        success: function (res) { },
        fail: function () { },
        complete: function () {

        }
      })
    })
    wx.onSocketMessage(function (e) {
      var result = JSON.parse(e.data);
      if (result.code == 1) {
        if (result.action == 'login') {
          app.configure.mytoast('连接成功!')
          that.setData({
            chats_id: result.chats_id
          })
          if (timeGroup) {
            clearInterval(timeGroup)
            timeGroup = null
          }
          timeGroup = setInterval(() => {
            //发送消息
            // wx.sendSocketMessage({
            //   data: JSON.stringify({
            //     from_user_id: app.globalData.userInfo.id, //自己的id
            //     to_user_id: that.data.getInfo.id, //对方id
            //     action: 'heartbeat',
            //     content: '',
            //     img: '', // 有就填，没有就空
            //     chats_id: that.data.chats_id // 回话id 、房间号,房间号是从哪里来的？
            //   }),
            //   success: function (res) {

            //   },
            //   fail: function () {

            //   },
            //   complete: function () {

            //   }
            // })
          }, 10000)
        }
        if (result.action == 'msg') {
          if (result.msg_type == 'tips') {
            app.configure.mytoast(result.msg)
          } else {
            if (result.msg != "对方没在线，请换一位律师") {
              let list = {
                time: app.configure.timeFormatNotime(result.creatTime * 1000),
                avatar: result.avatar,
                id: result.chats_id,
                content: result.msg,
                img: result.img,
                nickName: result.nickname
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
            }

          }
        }
      } else {
        if (result.action == 'logout') {
          app.configure.mytoast(result.msg)
        } else {
          app.configure.mytoast('链接失败!')
        }
      }
    })
    wx.onSocketClose(function (res) {
      if (timeGroup) {
        clearInterval(timeGroup)
        timeGroup = null
      }
    })
    wx.onSocketError(function (res) {
      if (timeGroup) {
        clearInterval(timeGroup)
        timeGroup = null
      }
    })
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
    if (that.data.chats_id != undefined && that.data.chats_id != null && that.data.chats_id != '') {
      if (that.data.textContent != '') {
        var jsonData = {
          from_user_id: app.globalData.userInfo.id, //自己的id
          to_user_id: that.data.getInfo.id, //对方id
          action: 'msg',
          content: that.data.textContent,
          img: '', // 有就填，没有就空
          chats_id: that.data.chats_id // 回话id 、房间号,房间号是从哪里来的？
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
    wx.setNavigationBarTitle({
      title: '医生问答',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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