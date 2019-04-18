var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.patientId,
      hsid: options.hsid
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      patient_id: options.patientId,
      history_id:options.hsid
    }, 'User/history_find', res => {
      WxParse.wxParse('article', 'html', res.data.data.history_content, this, 0);
    })
  },
  prescription() {
    wx.navigateTo({
      url: '/pages/cf/cf?id=' + this.data.id + '&hsid=' + this.data.hsid,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  report() {
    wx.navigateTo({
      url: '/pages/bl/bl?id=' + this.data.id+'&hsid='+this.data.hsid,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
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
      title: '病例详情',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
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
  }
})