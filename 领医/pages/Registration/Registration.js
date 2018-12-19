// pages/Registration/Registration.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: 'waitIng',
    starList:[1,2,3,4,5],
    list: [],
    listed:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST',{
      user_token:app.globalData.user_token
    },'User/not_diagnose',res=>{
      console.log(res)
      this.setData({
        listed:res.data.data
      })
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token
    }, 'User/already_diagnose', res => {
      this.setData({
        list: res.data.data
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
      title: '挂号列表',
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
  waitIng(){
    this.setData({
      statusType: 'waitIng'
    })
    app.ajax('POST',{
      user_token:app.globalData.user_token
    },'User/not_diagnose',res=>{
      this.setData({
        list:res.data.data
      })
    })
  },
  patiented(){
    this.setData({
      statusType: 'patiented'
    })
    app.ajax('POST', {
      user_token: ''
    }, 'User/already_diagnose', res => {
      this.setData({
        list: res.data.data
      })
    })
  },
  cencel(e){
    console.log(e)
    wx.showToast({
      title: '取消成功!',
      mask:true
    })
  },
  toEvent(e){
    wx.navigateTo({
      url: '`/pages/evaluate/evaluate?id=${e.currentTarget.dataset.id}`',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})