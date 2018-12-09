//获取应用实例
const app = getApp()

Page({

  data: {
    ImageHost: app.ImageHost,
    formPhone: '',
    formCode: ''
  },
  //监听表单phone
  formPhone: function (e) {
    this.setData({
      formPhone: e.detail.value
    })
  },
  //监听表单code
  formCode: function (e) {
    this.setData({
      formCode: e.detail.value
    })
  },
  //表单提交事件
  formSubmit1: function (event) {
    wx.switchTab({
      url: '/pages/index/index',
    })
    // app.postRequest('/account/login_submit', {
    //   phone: this.data.formPhone,
    //   code: this.data.formCode
    // });
    // this.setData({
    //   formPhone: '',
    //   formCode: ''
    // });
  },
  //发送短信验证码
  SendCode: function(){
    app.postRequest('/account/send_code', {
      phone: this.data.formPhone
    });
  }
})
