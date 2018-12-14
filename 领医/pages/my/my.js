// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
      title: '个人中心',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx.getStorage({
      key: 'type',
      success:(res)=>{
          this.setData({
            type:0
          })
      },
      fail: function (res) { console.log(res)
        wx.reLaunch({
          url: '/pages/login/index',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
       },
      complete: function (res) { console.log(res) },
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
  out(){
    wx.clearStorage('type')
    wx.switchTab({
        url: "/pages/index/index",
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**就诊人管理
   * @methon toPatient
   */
  toPatient(){
    wx.getStorage({
      key: 'type',
      success: function (res) {
        wx.navigateTo({
          url: '/pages/PatientList/PatientList',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.navigateTo({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  },
  /**挂号列表
   * @methon toPatient
   */
  toRegistration(){
    wx.getStorage({
      key: 'type',
      success: function (res) {
        wx.navigateTo({
          url: '/pages/Registration/Registration',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.navigateTo({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  },
   /**我的医生
   * @methon tomyDoctor
   */
  tomyDoctor(){
    wx.getStorage({
      key: 'type',
      success: function (res) {
        wx.navigateTo({
          url: '/pages/my/doctor/doctor',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.navigateTo({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  }
})