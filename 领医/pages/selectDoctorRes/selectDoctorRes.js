// pages/selectDoctorRes/selectDoctorRes.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 0,
    dataList: [],
    doctor: null,
    notice: null,
    array: ['8:00-10:00', '14:00-16:00'],
    index: 0
  },
  GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1;//获取当前月份的日期
    let d = dd.getDate();
    let w = dd.getDay();
    let s = dd.getTime();
    let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return {
      mon: week[w],
      date: `${m}.${d}`,
      value: s,
      more: `${y}-${m}-${d}`
    }
  },
  //获取今天为起点得往后七天日期星期
  gitData() {
    let datalist = []
    for (let s = 0; s < 7; s++) {
      datalist.push(this.GetDateStr(s))
    }
    console.log(datalist)
    this.setData({
      dataList: datalist
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userId)
    this.setData({
      userid: app.globalData.userId,
      subjects_id: options.subjects_id,
      doctor_id: options.doctor_id,
      office_time: options.office_time,
      date: options.date
    })
    this.gitData()

    // app.ajax('POST', {
    //   doctor_id: options.doctor_id,
    // }, 'Index/doctor_quantum', res => {
    //   console.log(res)
    //   // this.setData({
    //   //   doctor: res.data.data.doctor,
    //   //   notice: res.data.data.notice
    //   // })
    // })
  },
  selectDay(e) {
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      clinic_id: app.globalData.clinic_id,
      subjects_id: this.data.subjects_id,
      doctor_id: this.data.doctor_id,
      office_time: this.data.dataList[e.currentTarget.dataset.index].more
    }, 'Index/select_time', res => {
      this.setData({
        doctor: res.data.data.doctor,
        notice: res.data.data.notice,
        timeList: res.data.data.office_time.map(item => {
          item.office_start_time = app.configure.timelist(item.office_start_time)
          item.office_over_time = app.configure.timelist(item.office_over_time)
          return item
        }),
        quantumList: res.data.data.quantum
      })
    })
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log()
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      clinic_id: app.globalData.clinic_id,
      subjects_id: this.data.subjects_id,
      doctor_id: this.data.doctor_id,
      office_time: this.GetDateStr(0).more
    }, 'Index/select_time', res => {
      // res.data.data.doctor.office_time = app.time(res.data.data.doctor.office_time)
      // console.log(res.data.data.doctor.office_time.split('-'))
      this.setData({
        doctor: res.data.data.doctor,
        notice: res.data.data.notice,
        timeList: res.data.data.office_time.map(item => {
          item.office_start_time = app.configure.timelist(item.office_start_time)
          item.office_over_time = app.configure.timelist(item.office_over_time)
          return item
        }),
        quantumList: res.data.data.quantum
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '预约挂号',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //确认预约
  sure() {
    app.ajax('POST', {
      user_token: app.globalData.user_token,
      clinic_id: app.globalData.clinic_id,
      subjects_id: this.data.subjects_id,
      doctor_id: this.data.doctor_id,
      office_time: this.data.office_time,
      quantum_time: this.data.date + this.data.array[this.data.index],
      patient_id: this.data.userid.patient_id
    }, 'Index/choice_registration', res => {
      app.toast(res.data.msg, res => {
        setTimeout(() => {
          wx.navigateBack({
            delta: 1,
          })
        })
      })
    })
  },
  /**
   * 选择就诊人
   */
  toselect() {
    wx.navigateTo({
      url: '/pages/selsectPatient/selsectPatient?changes=1',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})