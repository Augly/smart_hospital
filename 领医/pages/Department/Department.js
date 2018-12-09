//获取应用实例
const app = getApp();

Page({
  data: {
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

  onLoad: function (options) {
    this.setData({
      clinic_id: app.clinic_id,
      clinic_name: app.clinic_name,
      clinic_laboratory: app.clinic_laboratory
    });
  },
  tochanges(e) {
    this.setData({
      clinic_id: e.currentTarget.dataset.id,
      clinic_name: e.currentTarget.dataset.name,
      clinic_laboratory: e.currentTarget.dataset.laboratory
    })
    setTimeout(() => {
      wx.switchTab({
        url: "/pages/index/index?clinic_id=" + e.currentTarget.dataset.id + "&clinic_name=" + e.currentTarget.dataset.name + "&clinic_laboratory=" + e.currentTarget.dataset.laboratory,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 500)
  }
})
