const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myheight: '',
    height: 0,
    content: '',
    list: [],
    pageNum:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHeight(0)
    this.gitData()
  },
  gitData() {
    app.ajax('POST', {
      user_token: app.globalData.user_token,
    }, 'Index/hospital_guide', res => {
      this.setData({
        list: res.data.data.inquiry.map(item => {
          item.inquiry_time = app.configure.timeForm(item.inquiry_time)
          return item
        })
      })
      setTimeout(() => {
        this.setData({
          myTop: this.data.list.length - 1,
        })
      }, 300)
    })
  },
  getHeight(h) {
    app.configure.rem(h, (res) => {
      this.setData({
        myheight: res
      })
    })
  },
  //监听input获得焦点

  bindfocus: function (e) {
    this.setData({
      height: e.detail.height
    })
  },

  //监听input失去焦点

  bindblur: function (e) {

    this.setData({
      height: 0
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  getValue(e) {
    this.setData({
      content: e.detail.value
    })
  },
  send() {
    if (this.data.content != '') {
      app.ajax('POST', {
        user_token: app.globalData.user_token,
        inquiry_count: this.data.content
      }, 'Index/hospital_guide_add', res => {
        this.gitData()
      })
    } else {
      app.toast('请输入内容')
    }
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  tores(e) {
    wx.navigateTo({
      url: `/pages/messagesRes/messagesRes?id=${e.currentTarget.dataset.id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    console.log('--------下拉刷新-------');
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // 隐藏导航栏加载框  
    this.setData({
      pageNum: 1
    })
    this.gitData()
    wx.hideNavigationBarLoading();
    // 停止下拉动作  
    wx.stopPullDownRefresh();
  },
  //上拉加载
  onReachBottom: function () {
    console.log('--------触底加载-------');
    // wx.showLoading({
    //   title: '玩命加载中',
    //   mask: true,
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
    // app.ajax('POST', {
    //   // user_token: app.globalData.user_token,    //用户令牌
    //   doctor_id: this.data.doctor_id,     //医生id
    //   paging: this.data.pageNum,         //分页页数
    //   // clinic_id: this.data.clinic_id        //诊所id
    // }, 'Index/doctor_comment_page', res => {
    //   wx.hideLoading()
    //   let commont = this.data.doctor
    //   if (res.data.data.comment.length == 0) {
    //     wx.showToast({
    //       title: '暂无更多',
    //       mask: true,
    //     })
    //   } else {
    //     commont.comment.concat(res.data.data.comment)
    //     this.setData({
    //       doctor: commont,
    //       pageNum: 1 + this.data.pageNum
    //     })
    //   }
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})