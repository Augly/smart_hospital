//获取应用实例
const app = getApp();

Page({

  data: {
    height:0,
    ImageHost: app.ImageHost,
    clinicList: [
      { clinic_id: '1', clinic_name: '儿外科', clinic_laboratory: '骨科专科' },
      { clinic_id: '2', clinic_name: '儿内科  ', clinic_laboratory: '皮肤病专科' },
      { clinic_id: '3', clinic_name: '心理科', clinic_laboratory: '心理疏导' },
      { clinic_id: '4', clinic_name: '中医科', clinic_laboratory: '肾功能衰竭' },
    ],
    clinic_id: '',
    clinic_name: '',
    clinic_laboratory: ''
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: '导诊台',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function (options) {
    let that=this
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        that.setData({
          height: res.windowHeight-210*res.windowWidth/750
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    this.setData({
      clinic_id: app.clinic_id,
      clinic_name: app.clinic_name,
      clinic_laboratory: app.clinic_laboratory
    });
  },
  toMess(){
    wx.navigateTo({
      url: '/pages/messages/messages',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  tochanges(e) {
    this.setData({
      clinic_id: e.currentTarget.dataset.id,
      clinic_name: e.currentTarget.dataset.name,
      clinic_laboratory: e.currentTarget.dataset.laboratory
    })
    setTimeout(() => {
      wx.navigateTo({
        url: "/pages/selectDoctor/selectDoctor",
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 500)
  }
})
