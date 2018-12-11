// pages/addPatient/addPatient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType:null,
    selectIndex:0,
    sex:'1'    //性别默认男
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过上一个页面传值接收type参数以此判断本页面事进行添加还是修改
    this.setData({
      statusType:options.type
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
   * 选择切换
   * @Methon selectType
   * @params event
   * @return{
   *    e.currentTarget.dataset.index  //儿童为0，成人为1
   * }
   */
  selectType(e){
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 选择性别
   * @methon selectSex
   */
  selectSex(e){
    this.setData({
      sex:e.currentTarget.dataset.sex
    })
  },
  /**
   * 根据statusType判断事添加还是修改 
   * @Methon scope
   * @params 
   * @return 
   */
  scope(){
    wx.showToast({
      title: this.data.statusType=='add'?'添加成功!':'修改成功',
      duration: 1000,
      mask: true,
      success: function(res) {
       setTimeout(function(){
         wx.navigateBack({
           delta: 1,
         })
       },1000)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})