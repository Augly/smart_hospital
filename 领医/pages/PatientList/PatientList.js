// pages/PatientList/PatientList.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ImageHost: app.ImageHost,
    select: 0,
    list: [],
    selectIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '就诊人管理',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
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
            if (res.data.data.length>0){
              this.setData({
                selectIndex: res.data.data[0].patient_id
              })
            }
          }
        } else {
          app.toast(res.data.msg)
        }
      }
    )
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},
  select(e) {
    wx.setStorage({
      key: 'userId',
      data: this.data.list[e.currentTarget.dataset.index],
      success: res=>{
        app.globalData.userId = this.data.list[e.currentTarget.dataset.index]
        this.setData({
          selectIndex: this.data.list[e.currentTarget.dataset.index].patient_id
        })
        wx.navigateTo({
          url: `/pages/addPatient/addPatient?type=change&patient_id=${this.data.selectIndex}`,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { }
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  addUser(event) {
    wx.navigateTo({
      url: `/pages/addPatient/addPatient?type=${
        event.currentTarget.dataset.type
      }`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
  }
})
