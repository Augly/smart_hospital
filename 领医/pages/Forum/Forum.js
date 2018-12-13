// pages/Forum/Forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        logo:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1377889435,3331746090&fm=173&app=25&f=JPEG?w=218&h=146&s=6062BB47384386D698C1E10303003082',
        title:'秋季儿童疾病如何预防?',
        content:'炎热的夏季渐行渐远，我们将 很快步入清爽、干燥的秋天。 秋天的气候多变、空气干燥， 早晚温差大，宝宝容易出现感 冒、流鼻涕、咳嗽炎热的夏季渐行渐远，我们将 很快步入清爽、干燥的秋天。 秋天的气候多变、空气干燥， 早晚温差大，宝宝容易出现感 冒、流鼻涕、咳嗽',
        autor:'仇益阳',
        date:'2018/11/12'
      },
      {
        logo: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1377889435,3331746090&fm=173&app=25&f=JPEG?w=218&h=146&s=6062BB47384386D698C1E10303003082',
        title: '秋季儿童疾病如何预防?',
        content: '炎热的夏季渐行渐远，我们将 很快步入清爽、干燥的秋天。 秋天的气候多变、空气干燥， 早晚温差大，宝宝容易出现感 冒、流鼻涕、咳嗽炎热的夏季渐行渐远，我们将 很快步入清爽、干燥的秋天。 秋天的气候多变、空气干燥， 早晚温差大，宝宝容易出现感 冒、流鼻涕、咳嗽',
        autor: '仇益阳',
        date: '2018/11/12'
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
    wx.setNavigationBarTitle({
      title: '医生讲堂',
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
  toRes(){
    //详情页
    wx.navigateTo({
      url: '/pages/ForumRes/ForumRes',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})