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
    
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      inquiry_id: options.id
    }, 'Index/hospital_guide_detail', res => {
      let all = res.data.data
      all.answer_time = app.configure.timeForm(all.answer_time)
      all.inquiry_time = app.configure.timeForm(all.inquiry_time)
      this.setData({
        alldata:all
      })
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
  togh(){
    if (app.globalData.user_token != '') {
      wx.navigateTo({
        url: '/pages/my/doctor/doctor',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.reLaunch({
        url: '/pages/login/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})