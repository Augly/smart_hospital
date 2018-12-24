//获取应用实例
const app = getApp();

Page({
  data: {
    ImageHost: app.ImageHost,
    clinicList: [],
  },
  onLoad: function (options) {
    this.setData({
      clinic_id: app.globalData.clinic_id,
    })
    app.ajax('POST', {
      clinic_id: app.globalData.clinic_id
    }, 'Index/clinic_switch', (res) => {
      if (res.data.code == 1) {
        this.setData({
          clinicList: res.data.data.list
        })
      } else {
        app.toast(res.data.msg)
      }
    })
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '切换诊所',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 切换当前医院并记录值赋值给全局
   * @Methon tochanges
   */
  tochanges(e) {
    // app.globalData.clinic_id = e.currentTarget.dataset.id,
    //   app.globalData.clinic_name = e.currentTarget.dataset.name,
    //   app.globalData.clinic_laboratory = e.currentTarget.dataset.laboratory
    this.setData({
      clinic_id: e.currentTarget.dataset.id,  //医院id
      clinic_name: e.currentTarget.dataset.name,  //医院名称
    })
    // 切换成功后500毫秒返回index页并传值过去
    setTimeout(() => {
      wx.navigateTo({
        url: `/pages/clinicPro/clinicPro?clinicId=${e.currentTarget.dataset.id}`,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 500)
  }
})
