// pages/my/my.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,
    allData:null,
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST',{
      user_token: app.globalData.user_token
    },'User/user_details',res=>{
      this.setData({
        allData:res.data.data.user,
        show:true
      })
    })
  },
  changesA() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // var tempFilePaths = res.tempFilePaths
        let all = this.data.allData
        all.user_portrait = res.tempFilePaths[0]
        this.setData({
          allData: all
        })
      }
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
      title: '个人中心',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx.getStorage({
      key: 'user_token',
      success:res=>{
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
  getName(e){
    let all = this.data.allData
    all.user_nickname = e.detail.value
    this.setData({
      allData: all
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
    wx.clearStorage('user_token')
    app.globalData.user_token = ''
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
    if (app.globalData.user_token != '') {
      wx.navigateTo({
        url: '/pages/selsectPatient/selsectPatient?type=2',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.reLaunch({
        url: '/pages/login/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  /**挂号列表
   * @methon toPatient
   */
  toRegistration(){
    if (app.globalData.user_token != '') {
      wx.navigateTo({
        url: '/pages/Registration/Registration',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.reLaunch({
        url: '/pages/login/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    
  },
   /**我的医生
   * @methon tomyDoctor
   */
  tomyDoctor(){
    if (app.globalData.user_token != '') {
      wx.navigateTo({
        url: '/pages/my/doctor/doctor',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.reLaunch({
        url: '/pages/login/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  }
})