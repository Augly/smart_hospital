// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    doctorList:['王晶晶','仇益阳'],
    ks: ['外科', '外科专科', '外科', '外科专科', '外科', '外科专科', '外科', '外科专科'],
    colorList: ['rgba(255,245,245,1)', 'rgba(243, 249, 253, 1)', 'rgba(252, 252, 252, 1)', 'rgba(255, 248, 241, 1)', 'rgba(246, 247, 248, 1)', 'rgba(244, 251, 243, 1)', 'rgba(240, 252, 254, 1)','rgba(255, 251, 232, 1)']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getValue(e){
    this.setData({
      value: e.detail.value
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
      title: '搜索',
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