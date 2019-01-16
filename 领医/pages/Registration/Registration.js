
// pages/Registration/Registration.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: 'waitIng',
    starList:[1,2,3,4,5],
    list: [],
    mask:false,
    status: 'cendel',
    cendelId:0,
    imgurl: app.ImageHost,
    cendelIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.statusType==''){
      this.all()
    } else if (options.statusType == 'waitIng'){
      this.waitIng()
    }
  },
  all(){
    this.setData({
      statusType: ''
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token
    }, 'User/user_registration_list', res => {
      this.setData({
        list: res.data.data.map(item => {
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },
  togo(){
    wx.navigateTo({
      url: '/pages/index/switchover/switchover',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    // wx.setNavigationBarTitle({
    //   title: '挂号列表',
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
    if (this.data.statusType == '') {
      this.all()
    } else if (this.data.statusType == 'waitIng') {
      this.waitIng()
    }else{
      this.patiented()
    }
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
    wx.reLaunch({
      url: '/pages/my/my'
    })
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
    app.ajax('POST',{
      user_token: app.globalData.user_token
    },'User/not_diagnose',res=>{
      this.setData({
        list: res.data.data.map(item => {
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },
  patiented(){
    this.setData({
      statusType: 'patiented'
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token
    }, 'User/already_diagnose', res => {
      this.setData({
        list: res.data.data.map(item => {
          item.evaluation_level = Math.ceil(item.evaluation_level)
          return item
        })
      })
    })
  },
  cencel(e){
    this.setData({
      mask:true,
      status: 'cendel',
      cendelIndex: e.currentTarget.dataset.index,
      cendelId: e.currentTarget.dataset.id
    })
  },
  del(e) {
    this.setData({
      mask: true,
      status:'del',
      cendelIndex: e.currentTarget.dataset.index,
      cendelId: e.currentTarget.dataset.id
    })
  },
  hideMask(){
    this.setData({
      mask: false,
    })
  },
  sureCendel(){
    if (this.data.status == "cendel"){
      app.ajax('POST', {
        user_token: app.globalData.user_token,
        registration_id: this.data.cendelId
      }, 'User/cancel_registration', res => {
        let list = this.data.list
        list.splice(this.data.cendelIndex, 1)
        app.configure.mytoast('已取消预约')
        this.setData({
          list: list,
          mask: false
        })
      })
    }else{
      app.ajax('POST', {
        user_token: app.globalData.user_token,
        registration_id: this.data.cendelId
      }, 'User/user_registration_delete', res => {
        let list = this.data.list
        list.splice(this.data.cendelIndex, 1)
        app.configure.mytoast('已删除')
        this.setData({
          list: list,
          mask: false
        })
      })
    }

  },
  toEvent(e){
    wx.navigateTo({
      url: `/pages/evaluate/evaluate?id=${e.currentTarget.dataset.id}&gid=${e.currentTarget.dataset.gid}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})