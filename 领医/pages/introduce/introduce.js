// pages/introduce/introduce.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    ImageHost:app.ImageHost,
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 800,
    ks:[],
    product:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST',{

    },'Index/clinic_intro',res=>{
      console.log(res.data.data)
      this.setData({
        ks: res.data.data.subjects,
        product: res.data.data.datum,
        imgUrls: [res.data.data.datum.organization_picture==''?'':this.data.ImageHost + res.data.data.datum.organization_picture]
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
      title: '领医介绍',
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