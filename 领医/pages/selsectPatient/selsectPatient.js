// pages/selsectPatient/selsectPatient.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: '0',
    ImageHost: app.ImageHost,
    selectIndex: 0,
    list: [],
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type  //如果为1进行科室选择进行预约
    })
  },
  del(e) {
    console.log(e)

    app.ajax('POST', {
      patient_id: e.detail.myindex //就诊人id
    }, 'User/patient_delete', res => {
      wx.showToast({
        title: res.data.msg,
        duration: 1000,
        mask: true,
        success: res=> {
          if (app.globalData.userId.patient_id = e.detail.myindex) {
            wx.clearStorage('userId')
            app.globalData.userId = ''
          }
          this.gitData()
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  gitData() {
    app.ajax(
      'POST',
      {
        user_token: app.globalData.user_token
      },
      'User/registration_patient_list',
      res => {
        if (res.data.code == 1) {
          this.setData({
            list: res.data.data
          })
          if (app.globalData.userId != '') {
            console.log(app.globalData.userId)
            this.setData({
              selectIndex: app.globalData.userId.patient_id
            })
          } else {
            if (res.data.data.length > 0) {
              this.setData({
                selectIndex: res.data.data[0].patient_id
              })
            }
          }
          this.setData({
            show: true
          })
        } else {
          app.toast(res.data.msg)
        }
      }
    )
  },
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '选择就诊人',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { }
    })
    this.gitData()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
  select(e) {
    wx.setStorage({
      key: 'userId',
      data: this.data.list[e.currentTarget.dataset.index],
      success: res => {
        app.globalData.userId = this.data.list[e.currentTarget.dataset.index]
        this.setData({
          selectIndex: this.data.list[e.currentTarget.dataset.index].patient_id
        })
        if (this.data.type == '1') {
          wx.navigateTo({
            url: '/pages/Department/Department',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        } else {
          wx.navigateTo({
            url: `/pages/addPatient/addPatient?type=change&patient_id=${this.data.selectIndex}`,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { }
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  addUser(event) {
    wx.navigateTo({
      url: `/pages/addPatient/addPatient?type=${
        event.currentTarget.dataset.type
        }`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { }
    })
  }
})
