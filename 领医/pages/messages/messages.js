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
    paging: 1
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
      paging: this.data.paging
    }, 'Index/hospital_guide', res => {
      wx.showLoading({
        title: '拼命加载中~',
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
      setTimeout(data => {
        wx.hideLoading()
        let s = this.data.paging
        if (res.data.data.inquiry.length > 0) {
          if(s==1){
            let list = res.data.data.inquiry.map(item => {
              item.inquiry_time = app.configure.timeForm(item.inquiry_time)
              return item
            })
            this.setData({
              list: list.reverse(),
              paging: 1 + s
            })
            setTimeout(() => {
              this.setData({
                myTop: this.data.list.length - 1,
              })
            }, 300)
          }else{
            let list = res.data.data.inquiry.map(item => {
              item.inquiry_time = app.configure.timeForm(item.inquiry_time)
              return item
            })
            let oldlist = this.data.list
            this.setData({
              list: list.concat(oldlist),
              paging: 1 + s
            })
          }
          
        } else {
          app.toast('暂无更多数据')
        }
      }, 1000)


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
        this.setData({
          paging:1,
          content: ''
        })
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
  //下拉加载更多
  bindscrolltoupper: function () {
    this.gitData()
  },
  //下拉刷新
  onPullDownRefresh: function () {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})