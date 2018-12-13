// pages/selsectPatient/selsectPatient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'0',
    selectIndex: 0,
    list: [{
      id: '1',
      name: '测试',   //姓名
      avater: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',  //头像
      age: '18',  //年龄
      sex: '男', //性别
    },
    {
      id: '1',
      name: '测试',   //姓名
      avater: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',  //头像
      age: '18',  //年龄
      sex: '男', //性别
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.changes && options.changes=='1'){
      this.setData({
        type:'1'
      })
    } 
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
  select(e){
    console.log(e.currentTarget.dataset.id)   //id/
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
    if (this.data.type=='1'){
     wx.navigateBack({
       delta: 1,
     })
    }else{
      wx.navigateTo({
        url: '/pages/Department/Department',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  addUser(event) {
    wx.navigateTo({
      url: '/pages/addPatient/addPatient?type=' + event.currentTarget.dataset.type,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})