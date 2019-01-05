//获取应用实例
const app = getApp()

Page({
  data: {
    ImageHost: app.ImageHost,
    clinicList: []
  },
  onLoad: function(options) {
    this.setData({
      clinic_id: app.globalData.clinic_id
    })
    app.ajax(
      'POST',
      {
        clinic_id: app.globalData.clinic_id
      },
      'Index/clinic_switch',
      res => {
        if (res.data.code == 1) {
          this.setData({
            clinicList: res.data.data.list
          })
        } else {
          app.toast(res.data.msg)
        }
      }
    )
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '诊所列表',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
    wx.getStorage({
      key: 'user_token',
      success: res => {
        this.setData({
          type: 0
        })
        app.globalData.user_token = res.data
        wx.request({
          url:
            'https://lingyiil.dazhu-ltd.cn/index.php/api/User/user_information',
          data: {
            user_token: app.globalData.user_token
          },
          method: 'POST',
          success: res => {
            if (res.data.code == -1) {
              wx.clearStorage('user_token')
              app.globalData.user_token = ''
              wx.redirectTo({
                url: '/pages/login/index',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {}
              })
            }
          },
          fail: function(res) {},
          complete: function(res) {}
        })
      },
      fail: function(res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/login/index',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {}
        })
      },
      complete: function(res) {
        console.log(res)
      }
    })
  },
  /**
   * 切换当前医院并记录值赋值给全局
   * @Methon tochanges
   */
  tochanges(e) {
    // app.globalData.clinic_id = e.currentTarget.dataset.id,
    //   app.globalData.clinic_name = e.currentTarget.dataset.name,
    //   app.globalData.clinic_laboratory = e.currentTarget.dataset.laboratory
    this.setData({
      clinic_id: e.currentTarget.dataset.id, //医院id
      clinic_name: e.currentTarget.dataset.name //医院名称
    })
    // 切换成功后500毫秒返回index页并传值过去
    setTimeout(() => {
      wx.navigateTo({
        url: `/pages/clinicPro/clinicPro?clinicId=${
          e.currentTarget.dataset.id
        }`,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {}
      })
    }, 500)
  }
})
