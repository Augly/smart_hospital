// pages/my/doctor/doctor.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList: [1, 2, 3, 4, 5],
    list: [],
    imgUrl: app.ImageHost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.ajax('POST',{
      user_token:app.globalData.user_token,
      clinic_id:app.globalData.clinic_id
    },'User/my_doctor',(res)=>{
      this.setData({
        list:res.data.data.map(item=>{
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '我的医生',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  //没有数据的跳页处理
  togo(){

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 根据医生的id跳转到医生详情
   * @methon toRes
   * 
   */
  toRes(e) {
    wx.navigateTo({
      url: '/pages/my/doctorRes/doctorRes?doctorId=' + e.currentTarget.dataset.doctorid,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  tochat(e) {
    console.log(e.currentTarget.dataset.id) //此处为医生id
    wx.navigateTo({
      url: '/pages/chat/chat',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})