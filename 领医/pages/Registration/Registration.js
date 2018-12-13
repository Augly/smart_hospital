// pages/Registration/Registration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: 'waitIng',
    starList:[1,2,3,4,5],
    list: [{
      avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
      name: '王晶',
      ks: '心脏科',
      zw: '主治医生',
      ghlx:'门诊普通号',
      ipent:'王陆',
      askNum: 246,
      adder: '广东省北京大学深圳医院',
      gold: 5,
      id: 1
    }]
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
  },
  patiented(){
    this.setData({
      statusType: 'patiented'
    })
  },
  cencel(){
    wx.showToast({
      title: '取消成功!',
      mask:true
    })
  },
  toEvent(){
    console.log('去评价')
    wx.navigateTo({
      url: '/pages/evaluate/evaluate',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})