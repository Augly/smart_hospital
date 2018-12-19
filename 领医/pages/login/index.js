//获取应用实例
const app = getApp()
Page({

  data: {
    ImageHost: app.ImageHost,
    formPhone: '',
    formCode: '',
    code: '发送验证码',
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
    var phone = /^1(3|4|5|7|8)\d{9}$/;
    if (phone.test(this.data.formPhone)) {
      if (this.data.formCode != '') {
        app.ajax('POST', {
          phone: this.data.formPhone,
          code: this.data.formCode
        }, 'Login/user_login', (res) => {
          app.globalData.user_token = res.data.data.user_token
          if (res.data.code == 1) {
            wx.setStorage({
              key: 'user_token',
              data: res.data.data.user_token,
              success: res=> {
                
                wx.switchTab({
                  url: '/pages/index/index',
                  success: function (res) { 
                    app.toast('登陆成功!')
                  },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              },
              fail: function (res) { },
              complete: function (res) { },
            })
          }else{
            app.toast(res.data.msg)
          }
        })
      } else {
        app.toast('请输入验证码')
      }
    } else {
      app.toast('请输入正确的手机号!')
    }
    


  },
  //发送短信验证码
  SendCode: function () {
    var phone = /^1(3|4|5|7|8)\d{9}$/;
    if (phone.test(this.data.formPhone)) {
      if (this.data.code == '发送验证码') {
        this.setData({
          code: 60
        })
        app.ajax('POST', {
          phone: this.data.formPhone
        }, 'Login/send_message', (res) => {
          if (res.data.code == 1) {
            app.toast(res.data.msg)
          }
        })
        let st = setInterval(() => {
          let n = this.data.code--
          if (n == 1) {
            this.setData({
              code: '发送验证码'
            })
            clearInterval(st)
          } else {
            n--
            this.setData({
              code: n
            })
          }
        }, 1000)
      }
    } else {
      app.toast('手机号不正确!')
    }
  }
})
