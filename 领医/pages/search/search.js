// pages/search/search.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clinic_id:'',
    value:'',
    doctorList:['王晶晶','仇益阳'],
    subjects: ['外科', '外科专科', '外科', '外科专科', '外科', '外科专科', '外科', '外科专科'],
    colorList: ['rgba(255,245,245,1)', 'rgba(243, 249, 253, 1)', 'rgba(252, 252, 252, 1)', 'rgba(255, 248, 241, 1)', 'rgba(246, 247, 248, 1)', 'rgba(244, 251, 243, 1)', 'rgba(240, 252, 254, 1)','rgba(255, 251, 232, 1)']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      clinic_id:options.clinic_id
    })
  },
  getValue(e){
    this.setData({
      value: e.detail.value
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
      title: '搜索',
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
  scope(){
    if(this.data.value!=''){
      app.ajax('POST',{
        seek: this.data.value,
        clinic_id: this.data.clinic_id
      },'Index/seek',(res)=>{
        if(res.data.code==1){
          this.setData({
            doctorList: res.data.data.doctor,
            subjects: res.data.data.subjects
          })
        }else{
          app.toast(res.data.msg)
        }
      })
    }else{
      wx.navigateBack({
        delta: 1,
      })
    }
  },
  tosubject(e){
    //去科室详情
  },
  todoctor(e){
    //去医生详情
  }
})