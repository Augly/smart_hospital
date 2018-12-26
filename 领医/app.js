  const configure=require('./utils/util.js')
App({
  time: configure.timeFormatNotime,
  ajax:configure.ajax,
  configure:configure,
  toast: configure.mytoast,
  lanhu: 'http://www.kiss-me.top/lingyi/',
  RequestHost: 'https://lingyiil.dazhu-ltd.cn/program',
  ImageHost: 'http://lingyiil.dazhu-ltd.cn/public/uploads/',
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    wx.getStorage({
      key: 'user_token',
      success: res => {
        this.globalData.user_token = res.data
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) { },
    })
    wx.getStorage({
      key: 'userId',
      success: res => {
        console.log(res.data)
        this.globalData.userId = res.data
      },
      fail: function (res) {

      },
      complete: function (res) { },
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    user_token:'',
    clinic_id: '',
    clinic_name: '',
    clinic_laboratory: '',
    userId:''
  }
})
