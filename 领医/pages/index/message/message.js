//获取应用实例
const app = getApp();

Page({

  data: {
    ImageHost: app.ImageHost,
    messageList: [
      { message_id: 1, message_name: '有一个新消息', message_createtime: 1096235795 },
      { message_id: 1, message_name: '有一个新消息', message_createtime: 1096235795 },
      { message_id: 1, message_name: '有一个新消息', message_createtime: 1096235795 },
      { message_id: 1, message_name: '有一个新消息', message_createtime: 1096235795 },
    ],
    startX: 0
  },

  onLoad: function (options) {
    if (options.clinic_id) {
      app.clinic_id = options.clinic_id;
      app.clinic_name = options.clinic_name;
      app.clinic_laboratory = options.clinic_laboratory;
    }
    if (app.clinic_id == '') {
      app.clinic_id = '1';
      app.clinic_name = '北京领医怡乐儿童医院1';
      app.clinic_laboratory = '内科，外科，脑科，心脏科';
    }
    this.setData({
      clinic_id: app.clinic_id,
      clinic_name: app.clinic_name,
      clinic_laboratory: app.clinic_laboratory
    });
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
  }

})
