// pages/PatientList/PatientList.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:0,
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
    selectIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST',{
      user_token:'',
      patient_type:1
    },'User/patient_list',(res)=>{
      this.setData({
        list:res.data.data
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
    wx.setNavigationBarTitle({
      title: '就诊人管理',
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
  addUser(event){
    wx.navigateTo({
      url: `/pages/addPatient/addPatient?type=${event.currentTarget.dataset.type}&id=${event.currentTarget.dataset.id}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
})