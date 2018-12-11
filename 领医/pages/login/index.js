//获取应用实例
const app = getApp()

Page({

  data: {
    ImageHost: app.ImageHost,
    formPhone: '',
    formCode: '',
    code:'发送验证码'
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
  },
  //发送短信验证码
  SendCode: function(){
    //验证码读秒
    if(this.data.code=='发送验证码'){
      this.setData({
        code:60
      })
      let st = setInterval(() => {
        let n=this.data.code--
        if(n==1){
          this.setData({
            code:'发送验证码'
          })
          clearInterval(st)
        }else{
          n--
          this.setData({
            code: n
          })
        } 
      }, 1000)
    }
  }
})
