const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList: [1, 2, 3, 4, 5],
    selectIndex: 4,
    cursor: 0,
    content: '' //内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      doctor_id: options.id,
      gid: options.gid
    })
  },
  getValue(e) {
    console.log(e)
    this.setData({
      cursor: e.detail.cursor,
      content: e.detail.value
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
    return {
      title: '领医智慧医院',
      path: '/pages/index/index'
    }
  },
  evaClick(e) {
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
  },
  submit() {
    if (this.data.content != '') {
      app.ajax('POST', {
        doctor_id: this.data.doctor_id,
        registration_id: this.data.gid,
        evaluation_count: this.data.content,
        evaluation_level: this.data.selectIndex,
        user_token: app.globalData.user_token
      }, 'User/doctor_evaluation', res => {
        wx.showToast({
          title: '评价成功',
          duration: 2000,
          mask: true,
          success: function (res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1,
              })
            }, 1000)
          },
          fail: function (res) {},
          complete: function (res) {},
        })
      })
    } else {
      app.toast('请输入评价内容!')
    }

  }
})