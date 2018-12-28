// pages/my/doctorRes/doctorRes.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList: [1, 2, 3, 4, 5],
    pageNum:1,
    imgUrl: app.ImageHost,
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      doctor_id: options.doctorId,
      clinic_id: app.globalData.clinic_id,
    })
    this.gitData()
  },
  togh() {
    if (app.globalData.user_token != '') {
      wx.navigateTo({
        url: '/pages/selsectPatient/selsectPatient?type=1',
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
  gitData(){
    app.ajax('POST', {
      user_token: app.globalData.user_token,    //用户令牌
      doctor_id: this.data.doctor_id,     //医生id
      paging: this.data.pageNum,         //分页页数
      clinic_id: this.data.clinic_id        //诊所id
    }, 'Index/choice_doctor_details', res => {
      res.data.data.doctor.doctor_star = Math.ceil(res.data.data.doctor.doctor_star)
      this.setData({
        doctor: res.data.data,
        pageNum: 1 + this.data.pageNum
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
      title: '医生详情',
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
  //下拉刷新
  onPullDownRefresh: function () {
    console.log('--------下拉刷新-------');
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // 隐藏导航栏加载框  
    this.setData({
      pageNum:1
    })
    this.gitData()
    wx.hideNavigationBarLoading();
    // 停止下拉动作  
    wx.stopPullDownRefresh();
  },
  //上拉加载
  onReachBottom: function () {
    console.log('--------触底加载-------');
    wx.showLoading({
      title: '玩命加载中',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token,    //用户令牌
      doctor_id: this.data.doctor_id,     //医生id
      paging: this.data.pageNum,         //分页页数
      clinic_id: this.data.clinic_id        //诊所id
    }, 'Index/choice_doctor_details', res => {
      wx.hideLoading()
      let alldata=this.data.doctor
      if(res.data.data.comment.length==0){
        wx.showToast({
          title: '暂无更多',
          mask: true,
        })
      }else{
        alldata.comment.concat(res.data.data.comment)
        this.setData({
          doctor:alldata,
          pageNum: 1 + this.data.pageNum
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tochat() {
    wx.navigateTo({
      url: '/pages/chat/chat',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})