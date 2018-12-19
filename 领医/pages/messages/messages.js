const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    list: [
      {
        "uid": 1,
        "fid": 1,
        "inquiry_title": "得了感冒怎么办？",
        "inquiry_count": "受寒了",
        "inquiry_answer": "多喝热水",
        "inquiry_time": 4294967295,
        "answer_time": 654654646,
        "user_nickname": "涅凡尘",
        "user_portrait": "20181208/8893ed59293a5e308512676e58ce8e16.jpg",
        "answer_people_name": "王医生",
        "answer_people_pic": "456524455"
      },
      {
        "uid": 1,
        "fid": 0,
        "inquiry_title": "这是问题标题",
        "inquiry_count": "问题描述",
        "inquiry_answer": "",
        "inquiry_time": 1544672719,
        "answer_time": 4294967295,
        "user_nickname": "涅凡尘",
        "user_portrait": "20181208/8893ed59293a5e308512676e58ce8e16.jpg",
        "answer_people_name": null,
        "answer_people_pic": null
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  getValue(e){
    this.setData({
      content:e.detail.value
    })
  },
  send(){
    app.toast('接口有问题,待修复')
    // if(this.data.content!=''){
    //   app.ajax('POST',{
    //     user_token:app.globalData.user_token,
    //     inquiry_count: this.data.inquiry_count
    //   },'Index/hospital_guide_add',res=>{
    //     app.toast('接口有问题,待修复')
    //   })
    // }else{
    //   app.toast('请输入内容')
    // }
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

  }
})