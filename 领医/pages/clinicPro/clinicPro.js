// pages/introduce/introduce.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    ImageHost: app.ImageHost,
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 800,
    morelist: false,
    hosRes: {
      adder: '中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院',
      tel: '17633369350',
      name: '中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院'
    },
    ks: ["儿科", "儿科"],
    product: " 主任医师，技术1级，文职特技。原全军科学技术委员 会委员，现担任职务：沈阳军区专家组副组长、全军心 研所第一所长、全军心血管外科专业组主任委员会。第 二四军医大学教授、博士生导师。"
  },
  getMore() {
    this.setData({
      morelist: true
    })

  },
  /**
   * 生命周期函数监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      clinic_id: options.clinicId
    })
    app.ajax('POST', {
      clinic_id: options.clinicId
    }, 'Index/clinic_introduction', res => {
      this.setData({
        allData: res.data.data
      })
    })
  },
  //去科室详情
  tores(e) {
    app.globalData.subjects_id = e.currentTarget.dataset.subjectsid
    wx.navigateTo({
      url: `/pages/subjects/subjects?subjectsId=${e.currentTarget.dataset.subjectsid}&clinic_id=${this.data.clinic_id}`,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  /**
   * 生命周期函数监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数监听用户下拉动作
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
  }
})