//获取应用实例
const app = getApp();

Page({

  data: {
    ImageHost: app.ImageHost,
    messageList: [],
    startX: 0
  },

  onLoad: function (options) {
    app.ajax('POST',{
      user_token:app.globalData.user_token
    },'Index/user_message_list',res=>{
      console.log(res.data.data)
      this.setData({
        messageList:res.data.data.map(res=>{
          res.user_message_createtime = app.configure.timeall(res.user_message_createtime)
          return res
        })
      })
    })
  },

  //下拉刷新
  onPullDownRefresh: function () {
    // console.log('--------下拉刷新-------');
    // // 显示顶部刷新图标
    // wx.showNavigationBarLoading();
    // // 隐藏导航栏加载框  
    // wx.hideNavigationBarLoading();
    // // 停止下拉动作  
    // wx.stopPullDownRefresh();
  },
  //上拉加载
  onReachBottom: function () {
    // console.log('--------触底加载-------');
    // wx.showLoading({
    //   title: '玩命加载中',
    // });
  },
del(e){
  console.log(e)

  
  app.ajax('POST', {
    user_message_id: this.data.messageList[e.detail.myindex].user_message_id
  }, 'Index/message_del', res => {
    let s = this.data.messageList
    s.splice(e.detail.myindex,1)
    this.setData({
      messageList:s
    })
    app.toast('删除成功!')
  })
},
onShow:function(){
  wx.setNavigationBarTitle({
    title: '消息列表',
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
  res(e){
    wx.navigateTo({
      url: `/pages/notice/notice?id=${e.currentTarget.dataset.id}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
