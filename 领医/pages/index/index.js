//获取应用实例
const app = getApp();
Page({

  data: {
    banner_list: [],
    ImageHost: app.ImageHost,
    clinic_id: app.globalData.clinic_id,
    clinic_name: app.globalData.clinic_name,
    clinic_laboratory: app.globalData.clinic_laboratory,
    lecture: []
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: app.globalData.clinic_name,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**跳转去我的医生
   * @methon toMydoctor
   * @params
   */
  toMydoctor() {
    wx.getStorage({
      key: 'user_token',
      success: function (res) {
        wx.navigateTo({
          url: '/pages/my/doctor/doctor',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  },
  onLoad: function (options) {
    //读取全局变量获取医院名称
    app.ajax('POST', {}, 'Index/Index', (res) => {
      if (res.data.code == 1) {
        res.data.data.lecture = res.data.data.lecture.map((item) => {
          item.lecture_craetetime = app.time(item.lecture_craetetime)
          return item
        })
        wx.setNavigationBarTitle({
          title: res.data.data.clinic.clinic_name,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        app.globalData.clinic_id = res.data.data.clinic.clinic_id
        app.globalData.clinic_name = res.data.data.clinic.clinic_name
        app.globalData.clinic_laboratory = res.data.data.clinic.hot_subjects
        this.setData({
          banner_list: res.data.data.banner,
          lecture: res.data.data.lecture,
          clinic: res.data.data.clinic,
          clinic_id: res.data.data.clinic.clinic_id,
          clinic_name: res.data.data.clinic.clinic_name,
          clinic_laboratory: res.data.data.clinic.hot_subjects,
        })
      }
    })
    //获取未读消息数
    // app.ajax('POST', {
    //   user_token:''
    // }, 'Index/user_message_unread', (res) => {
    //   if (res.data.code == 1) {
    //     this.setData({
    //       unread:res.data.data
    //     })
    //   }else{
    //     app.toast(res.data.msg)
    //   }
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
      clinic_id: app.globalData.clinic_id,
      clinic_name: app.globalData.clinic_name,
      clinic_laboratory: app.globalData.clinic_laboratory
    });
  },
  /**跳转去消息列表
  * @methon toMessges
  * @params
  */
  toMessges() {
    wx.getStorage({
      key: 'user_token',
      success: function (res) {
        wx.navigateTo({
          url: '/pages/index/message/message',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  },
  /**跳转去诊所切换以便切换诊所
  * @methon toChanges
  * @params
  */
  toChanges() {
    wx.navigateTo({
      url: `/pages/index/switchover/switchover?clinic_id=${this.data.clinic.clinic_id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**跳转去预约挂号
   * @methon selsect
   */
  selsect() {
    wx.getStorage({
      key: 'user_token',
      success: function (res) {
        wx.navigateTo({
          url: '/pages/selsectPatient/selsectPatient',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  },
  /**跳转去领医介绍
   * @methon toProduce
   * @params
   */
  toProduce() {
    wx.navigateTo({
      url: '/pages/introduce/introduce',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**跳转去医师讲堂
   * @methon ysjt
   * @params
   */
  ysjt() {
    wx.navigateTo({
      url: '/pages/Forum/Forum',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**跳转去导诊台
   * @methon todao
   * @params
   */
  todao() {
    wx.getStorage({
      key: 'user_token',
      success: function (res) {
        wx.navigateTo({
          url: "/pages/Helpdesk/Helpdesk",
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/login/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { console.log(res) },
    })

  },
  /**跳转去知识详情
  * @methon todao
  * @params
  */
  toRes(e) {
    wx.navigateTo({
      url: `/pages/ForumRes/ForumRes?id=${e.currentTarget.dataset.id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 去搜索页面
   * @methon toserch
   * @params
   */
  toserch() {
    wx.navigateTo({
      url: `/pages/search/search?clinic_id=${this.data.clinic.clinic_id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
