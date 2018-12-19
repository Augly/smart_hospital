// pages/selectDoctor/selectDoctor.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex:0,
    dataList: [],
    doctorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    app.ajax('POST',{
      user_token:app.globalData.user_token,
      clinic_id: app.globalData.clinic_id,
      subjects_id: options.subjects_id,
      office_time:''
    },'Index/choice_doctor_list',res=>{
      console.log(res)
      this.setData({
        doctorList: res.data.data.doctor.map(res=>{
          res.office_time = app.time(res.office_time)
          return res
        })
      })
    })
    this.gitData()
  },
  selectDay(e){
    this.setData({
      selectIndex:e.currentTarget.dataset.index
    })
  },
  GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1;//获取当前月份的日期
    let d = dd.getDate();
    let w = dd.getDay();
    let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return {
      mon: week[w],
      date: `${m}.${d}`
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '选择医生',
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
  /**
   * 详情
   */
  toRes(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/selectDoctorRes/selectDoctorRes?doctor_id=${e.currentTarget.dataset.id}&office_time=${e.currentTarget.dataset.timeid}&subjects_id=${this.data.subjects_id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})