// pages/selectDoctorRes/selectDoctorRes.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctor:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST', {},'Index/choice_doctor',res=>{
      this.setData({
        doctor: res.data.data.doctor
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
    wx.setNavigationBarTitle({
      title: '预约挂号',
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

  },
  //确认预约
  sure(){
    wx.showToast({
      title: '预约成功',
      icon:'success',
      image: '',
      duration: 2000,
      mask: true,
      success: function(res) {
        setTimeout(()=>{
          wx.navigateBack({
            delta: 1,
          })
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 选择就诊人
   */
  toselect(){
    wx.navigateTo({
      url: '/pages/selsectPatient/selsectPatient?changes=1',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})