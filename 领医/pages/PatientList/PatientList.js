// pages/PatientList/PatientList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: '1',
      name: '测试',   //姓名
      avater: '',  //头像
      age: '18',  //年龄
      sex: '男', //性别
    },
    {
      id: '1',
      name: '测试',   //姓名
      avater: '',  //头像
      age: '18',  //年龄
      sex: '男', //性别
    }
    ],
    selectIndex: 0
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
  addUser(event){
    wx.navigateTo({
      url: '/pages/addPatient/addPatient?type=' + event.currentTarget.dataset.type,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
})