// pages/selectDoctor/selectDoctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex:0,
    dataList: [{
      mon: '周一',
      date: '12.06'
    }, {
      mon: '周二',
      date: '12.07'
    }, {
      mon: '周三',
      date: '12.08'
    }, {
      mon: '周四',
      date: '12.09'
    }, {
      mon: '周五',
      date: '12.10'
    }, {
      mon: '周六',
      date: '12.11'
    }, {
      mon: '周日',
      date: '12.12'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  selectDay(e){
    this.setData({
      selectIndex:e.currentTarget.dataset.index
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
      title: '选择医生',
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
  /**
   * 详情
   */
  toRes() {
    wx.navigateTo({
      url: '/pages/selectDoctorRes/selectDoctorRes',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})