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
      user_token:''
    },'Index/user_message_list',res=>{
      this.setData({
        messageList:res.data.data.map(res=>{
          res.user_message_createtime = app.config.timeForm(res.user_message_createtime)
          return res
        })
      })
    })
  },

  //下拉刷新
  onPullDownRefresh: function () {
    console.log('--------下拉刷新-------');
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // 隐藏导航栏加载框  
    wx.hideNavigationBarLoading();
    // 停止下拉动作  
    wx.stopPullDownRefresh();
  },
  //上拉加载
  onReachBottom: function () {
    console.log('--------触底加载-------');
    wx.showLoading({
      title: '玩命加载中',
    });
  },
del(e){
  console.log(e)
  wx.showToast({
    title: '删除成功!',
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
    console.log(1)
    wx.navigateTo({
      url: '/pages/notice/notice',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
