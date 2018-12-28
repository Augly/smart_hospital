
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
    imgurl: app.ImageHost
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
        list:res.data.data.map(item=>{
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },
  togo(){
    wx.navigateTo({
      url: '/pages/index/switchover/switchover',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    // this.setData({
    //   list:[]
    // })
    this.setData({
      statusType: 'waitIng'
    })
    app.ajax('POST',{
      user_token: app.globalData.user_token
    },'User/not_diagnose',res=>{
      this.setData({
        list: res.data.data.map(item => {
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },
  patiented(){
    // this.setData({
    //   list: []
    // })
    this.setData({
      statusType: 'patiented'
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token
    }, 'User/already_diagnose', res => {
      this.setData({
        list: res.data.data.map(item => {
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },
  cencel(e){
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      registration_id:e.currentTarget.dataset.id
    }, 'User/cancel_registration', res => {
      let list = this.data.list
      list.splice(e.currentTarget.dataset.index,1)
      this.setData({
        list: list
      })
    })
  },
  toEvent(e){
    wx.navigateTo({
      url: `/pages/evaluate/evaluate?id=${e.currentTarget.dataset.id}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})