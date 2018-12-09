//app.js
App({
  lanhu: 'http://www.kiss-me.top/lingyi/',
  RequestHost: 'https://lingyiil.dazhu-ltd.cn/program',
  ImageHost: 'https://lingyiil.dazhu-ltd.cn/public/static/program/images',
  clinic_id: '',
  clinic_name: '',
  clinic_laboratory: '',
  
  //公共post表单提交方法
  postRequest: function (url,data){
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    wx.request({
      method: 'POST',
      url: this.RequestHost + url,
      data: data,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var resData = res.data;
        wx.hideLoading();
        wx.showToast({
          title: resData.msg,
          icon: 'none',
          mask: true
        });
      },
      fail: function () {
        wx.hideLoading();
        wx.showToast({
          title: '请检查网络连接',
          icon: 'none',
          mask: true
        });
      }
    });
  }
})