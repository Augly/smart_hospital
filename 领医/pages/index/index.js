//获取应用实例
const app = getApp();

Page({

  data: {
    banner_list: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    ImageHost: app.ImageHost,
    clinic_id: '',
    clinic_name: '',
    clinic_laboratory: '',
  },
  toMydoctor(){
    wx.navigateTo({
      url: '/pages/my/doctor/doctor',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
  toMessges(){
    wx.navigateTo({
      url: '/pages/index/message/message',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toChanges(){
    wx.navigateTo({
      url: '/pages/index/switchover/switchover',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  selsect(){
    wx.navigateTo({
      url: '/pages/selsectPatient/selsectPatient',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toProduce(){
    wx.navigateTo({
      url: '/pages/introduce/introduce',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  ysjt(){
    wx.navigateTo({
      url: '/pages/Forum/Forum',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  todao(){
    //去导诊台
    wx.navigateTo({
      url: "/pages/Helpdesk/Helpdesk",
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toRes(){
    wx.navigateTo({
      url: '/pages/ForumRes/ForumRes',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
