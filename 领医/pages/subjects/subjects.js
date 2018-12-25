// pages/subjects/subjects.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: app.ImageHost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST',{
      user_token: app.globalData.user_token,
      clinic_id: app.globalData.clinic_id,
      subjects_id: options.subjectsId
    },'Index/subjects_introduce',res=>{
      this.setData({
        alldata:res.data.data
      })
      wx.setNavigationBarTitle({
        title: res.data.data.test_subjects.subjects_name,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
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
  toRes(e) {
    wx.navigateTo({
      url: '/pages/my/doctorRes/doctorRes?doctorId=' + e.currentTarget.dataset.id,
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

  }
})