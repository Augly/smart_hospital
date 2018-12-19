// pages/my/doctorRes/doctorRes.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList: [1, 2, 3, 4, 5],
    evaluation_level:0,
    doctor:{
      name:'王晶',
      ks:'心脏科',
      zw:'主治医师',
      adder:'广东省北京大学深圳医院',
      askNum:'246',
      askedNum:'246',
      gold:'4',
      avtar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg',
      id:'',
      product:'主任医师，技术1级，文职特技。原全军科学技术委员 会委员，现担任职务：沈阳军区专家组副组长、全军心 研所第一所长、全军心血管外科专业组主任委员会。第 二四军医大学教授、博士生导师。',
      patentList:["肺病","肺炎"],
      evaList:[{
        res:' 主任医师，技术1级，文职特技。原全军科学技术委员 会委员，现担任职务：沈阳军区专家组副组长、全军心 研所第一所长、全军心血管外科专业组主任委员会。第 二四军医大学教授、博士生导师。',
        gold:4
      }]
    },
    hosRes:{
      adder:'中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院',
      tel:'17633369350',
      name:'中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院中国天津市河北区第四铁路医院'
    },
    pageNum:1
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.ajax('POST',{
      user_token:app.globalData.user_token,    //用户令牌
      doctor_id: options.doctorId,     //医生id
      paging: this.pageNum,         //分页页数
      clinic_id: options.clinic_id        //诊所id
    },'User/my_doctor_details',res=>{
      this.setData({
        doctor:res.data.data,
        evaluation_level: options.evaluation_level
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
      title: '医生详情',
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
  tochat() {
    wx.navigateTo({
      url: '/pages/chat/chat',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})