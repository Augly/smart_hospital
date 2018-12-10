// pages/selsectPatient/selsectPatient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.changes && options.changes=='1'){
      this.setData({
        type:'1'
      })
    } 
    // if (options.changes && options.changes == '2') {
    //   this.setData({
    //     type: '1'
    //   })
    // }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  select(){
    console.log(this.data.type)
    if (this.data.type=='1'){
     wx.navigateBack({
       delta: 1,
     })
    }else{
      wx.navigateTo({
        url: '/pages/Department/Department',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  addUser(event) {
    wx.navigateTo({
      url: '/pages/addPatient/addPatient?type=' + event.currentTarget.dataset.type,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})