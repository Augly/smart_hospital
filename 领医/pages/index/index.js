//获取应用实例
const app = getApp();
Page({

  data: {
    banner_list: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    ImageHost: app.ImageHost,
    clinic_id: '',
    clinic_name: '',
    clinic_laboratory: '',
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: '医院首页可变化',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**跳转去我的医生
   * @methon toMydoctor
   * @params
   */
  toMydoctor(){
    wx.navigateTo({
      url: '/pages/my/doctor/doctor',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (options) {
    //读取全局变量获取医院名称
    // wx.setNavigationBarTitle({
    //   title: options.clinic_name,
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    if (options.clinic_id) {
      app.clinic_id = options.clinic_id;
      app.clinic_name = options.clinic_name;
      app.clinic_laboratory = options.clinic_laboratory;
    }
    if (app.clinic_id == '') {
      app.clinic_id = '1';
      app.clinic_name = '北京领医怡乐儿童医院1';
      app.clinic_laboratory = '内科，外科，脑科，心脏科';
    }
    this.setData({
      clinic_id: app.clinic_id,
      clinic_name: app.clinic_name,
      clinic_laboratory: app.clinic_laboratory
    });
  },
   /**跳转去消息列表
   * @methon toMessges
   * @params
   */
  toMessges(){
    wx.navigateTo({
      url: '/pages/index/message/message',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
   /**跳转去诊所切换以便切换诊所
   * @methon toChanges
   * @params
   */
  toChanges(){
    wx.navigateTo({
      url: '/pages/index/switchover/switchover',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**跳转去预约挂号
   * @methon selsect
   */
  selsect(){
    wx.navigateTo({
      url: '/pages/selsectPatient/selsectPatient',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**跳转去领医介绍
   * @methon toProduce
   * @params
   */
  toProduce(){
    wx.navigateTo({
      url: '/pages/introduce/introduce',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**跳转去医师讲堂
   * @methon ysjt
   * @params
   */
  ysjt(){
    wx.navigateTo({
      url: '/pages/Forum/Forum',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**跳转去导诊台
   * @methon todao
   * @params
   */
  todao(){
    wx.navigateTo({
      url: "/pages/Helpdesk/Helpdesk",
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
   /**跳转去知识详情
   * @methon todao
   * @params
   */
  toRes(){
    wx.navigateTo({
      url: '/pages/ForumRes/ForumRes',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 去搜索页面
   * @methon toserch
   * @params
   */
  toserch(){
    console.log('去搜索页面')
    wx.navigateTo({
      url: '/pages/search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
