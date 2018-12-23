const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myheight: '',
    content:'',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHeight(0)
    this.gitData()
  },
  gitData(){
    app.ajax('POST', {
      user_token: app.globalData.user_token,
    }, 'Index/hospital_guide', res => {
      this.setData({
        list: res.data.data.inquiry.map(item => {
          item.inquiry_time = app.configure.timeForm(item.inquiry_time)
          return item
        })
      })
      setTimeout(() => {
        this.setData({
          myTop: this.data.list.length - 1,
        })
      }, 300)
    })
  },
  getHeight(h) {
    app.configure.rem(h, (res) => {
      this.setData({
        myheight: res
      })
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
    if(this.data.content!=''){
      app.ajax('POST',{
        user_token:app.globalData.user_token,
        inquiry_count: this.data.content
      },'Index/hospital_guide_add',res=>{
        this.gitData()
      })
    }else{
      app.toast('请输入内容')
    }
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  tores(e){
    wx.navigateTo({
      url: `/pages/messagesRes/messagesRes?id=${e.currentTarget.dataset.id}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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