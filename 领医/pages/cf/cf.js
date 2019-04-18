// pages/case/case.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    imgUrl: app.ImageHost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      history_id: options.hsid,
      paging: 1
    }, 'User/prescription_list', res => {
      this.setData({
        list: res.data.data.map(item => {
          item.prescription_createtime = app.time(item.prescription_createtime)
          return item
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  togo() {
    wx.navigateTo({
      url: '/pages/index/switchover/switchover',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '病例管理',
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
    return {
      title: '领医智慧医院',
      path: '/pages/index/index'
    }
  },
  lookCase(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/prescription/prescription?id=' + e.currentTarget.dataset.id + '&patient_id=' + e.currentTarget.dataset.patient_id + '&history_id=' + e.currentTarget.dataset.history_id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  select() {
    wx.navigateTo({
      url: "/pages/selsectPatient/selsectPatient?changes=1",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})