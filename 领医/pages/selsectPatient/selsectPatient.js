// pages/selsectPatient/selsectPatient.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'0',
    ImageHost: app.ImageHost,
    selectIndex: 0,
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userId',
      success: res=> {
        this.setData({
          selectIndex: res.data.userId.patient_id
        })
      },
      fail: function(res) {

      },
      complete: function(res) {},
    })

    if (options.changes && options.changes=='1'){
      this.setData({
        type:'1'
      })
    } 

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
        title: '选择就诊人',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    app.ajax('POST', {
      user_token: app.globalData.user_token
    }, 'User/registration_patient_list', (res) => {
      if (res.data.code == 1) {
        this.setData({
          list: res.data.data,
        })
      } else {
        app.toast(res.data.msg)
      }
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
  select(e){
    wx.setStorage({
      key: 'userId',
      data: this.data.list[e.currentTarget.dataset.index],
      success:res=>{
        this.setData({
          selectIndex: this.data.list[e.currentTarget.dataset.index].patient_id
        })
      }
    })
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