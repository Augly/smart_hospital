// pages/my/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList: [1, 2, 3, 4, 5],
    list: [{
        avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
        name: '王晶',
        ks: '心脏科',
        zw: '主治医生',
        askNum: 246,
        adder: '广东省北京大学深圳医院',
        gold: 5,
        id: 1
      }, {
        avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
        name: '王晶',
        ks: '心脏科',
        zw: '主治医生',
        askNum: 246,
        adder: '广东省北京大学深圳医院',
        gold: 5,
        id: 1
      },
      {
        avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
        name: '王晶',
        ks: '心脏科',
        zw: '主治医生',
        askNum: 246,
        adder: '广东省北京大学深圳医院',
        gold: 5,
        id: 1
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 根据医生的id跳转到医生详情
   * @methon toRes
   * 
   */
  toRes(e) {
    console.log(e.currentTarget.dataset.id) //此处为医生id
    wx.navigateTo({
      url: '/pages/my/doctorRes/doctorRes',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  tochat(e) {
    console.log(e.currentTarget.dataset.id) //此处为医生id
    wx.navigateTo({
      url: '/pages/chat/chat',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})