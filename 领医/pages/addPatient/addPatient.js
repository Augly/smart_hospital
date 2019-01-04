// pages/addPatient/addPatient.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    index:19,
    statusType: null,
    selectIndex: 1,
    sex: '1', //性别默认男
    alldata: null,
    patient_birthday: '1996-02-01',
    imgUrl: '',
    name: '',
    height:0,
    fixed:false,
    ImageHost: app.ImageHost
  },
  bindPickerChange(e) {
    let age = this.data.array[e.detail.value]
    this.setData({
      index: e.detail.value,
      patient_age: age
    })
  },
  bindfocus: function (e) {
    this.setData({
      height: -20,
      fixed: false
    })
    console.log(this.data.fixed)
  },
  bindDateChange(e) {
    this.setData({
      patient_birthday: e.detail.value
    })
  },
  bindlur: function(e) {
    this.setData({
      height: 0,
      fixed:true
    })
    console.log(this.data.fixed)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.user_token)
    let arr=[]
    for(let s=1;s<101;s++){
      arr.push(s)
    }
    this.setData({
      array:arr,
    })
    let age = this.data.array[this.data.index]
    this.setData({
      patient_age: age
    })
    //通过上一个页面传值接收type参数以此判断本页面事进行添加还是修改
    this.setData({
      statusType: options.type
    })
    wx.setNavigationBarTitle({
      title: this.data.statusType == 'add' ? '添加就诊人' : '修改就诊人',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    if (this.data.statusType != 'add') {
      this.setData({
        patient_id: options.patient_id
      })
      // //获取就诊人信息
      app.ajax('POST', {
        patient_id: options.patient_id, //就诊人id
      }, 'User/patient_update', res => {
        this.setData({
          imgUrl: res.data.data.patient_portrait,  //头像
          name: res.data.data.patient_realname,   //姓名
          selectIndex: res.data.data.patient_type,    //就诊人类型
          patient_type: res.data.data.patient_type,   //
          sex: res.data.data.patient_sex,   //性别
          patient_birthday: res.data.data.patient_birthday,   //生日
          patient_card_number: res.data.data.patient_card_number,  //身份证号
          patient_phone:res.data.data.patient_phone, //手机号
          patient_age:res.data.data.patient_age  //年龄
        })
      })
    }

  },
  //获取名字
  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  //获取生日
  getbirth(e) {
    this.setData({
      patient_birthday: e.detail.value
    })
  },
  //获取年龄
  getAge(e) {
    this.setData({
      patient_age: e.detail.value
    })
  },
  //获取手机号
  getphone(e) {
    this.setData({
      patient_phone: e.detail.value
    })
  },
  //获取身份证
  getID(e) {
    this.setData({
      patient_card_number: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  selectAVatr() {
    app.configure.chooseImage(res => {
      app.ajax('img', {}, 'upload/upload', res => {
        app.toast('头像上传成功')
        this.setData({
          imgUrl: this.data.ImageHost + res.data
        })
      }, res => {
        
      }, res => {

      }, res.tempFilePaths[0])
    })
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
   * 选择切换
   * @Methon selectType
   * @params event
   * @return{
   *    e.currentTarget.dataset.index  //儿童为0，成人为1
   * }
   */
  selectType(e) {
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 选择性别
   * @methon selectSex
   */
  selectSex(e) {
    this.setData({
      sex: e.currentTarget.dataset.sex
    })
  },
  del() {
    app.ajax('POST', {
      patient_id: this.data.patient_id //就诊人id
    }, 'User/patient_delete', res => {
      wx.showToast({
        title: res.data.msg,
        duration: 1000,
        mask: true,
        success: function(res) {
          wx.clearStorage('userId')
          app.globalData.userId = ''
          setTimeout(function() {
            wx.navigateBack({
              delta: 1,
            })
          }, 1000)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    })
  },
  /**
   * 根据statusType判断事添加还是修改 
   * @Methon scope
   * @params 
   * @return 
   */
  scope() {

    // if (this.data.imgUrl == '') {
    //   app.toast('请上传头像')
    //   return false
    // }
    if (this.data.name == '') {
      app.toast('请输入姓名')
      return false
    }
    if (this.data.patient_birthday == '') {
      app.toast('请输入出生年月')
      return false
    }
    if (this.data.patient_age == '') {
      app.toast('请输入年龄')
      return false
    }
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.data.patient_phone))) {
      app.toast('请输入正确的手机号')
      return false
    }
    if(this.data.selectIndex=='2'){
      if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.data.patient_card_number))) {
        app.toast('请输入正确的身份证号')
        return false
      }
    }
    if (this.data.statusType == 'add'){
      var data={
        user_token: app.globalData.user_token,
        patient_type: this.data.selectIndex, //就诊人类别1:儿童2:成人
        patient_sex: this.data.sex, //就诊人性别
        patient_realname: this.data.name, //就诊人姓名
        patient_portrait: this.data.imgUrl, //就诊人头像
        patient_birthday: this.data.patient_birthday, //就诊人生日
        patient_phone: this.data.patient_phone,  //就诊人手机号
        patient_card_number: this.data.patient_card_number, //身份证号
        patient_age: this.data.patient_age  //就诊人年龄
      }
    }else{
      var data={
        user_token: app.globalData.user_token,
        patient_type: this.data.selectIndex, //就诊人类别1:儿童2:成人
        patient_sex: this.data.sex, //就诊人性别
        patient_realname: this.data.name, //就诊人姓名
        patient_portrait: this.data.imgUrl, //就诊人头像
        patient_birthday: this.data.patient_birthday, //就诊人生日
        patient_phone: this.data.patient_phone,  //就诊人手机号
        patient_card_number: this.data.patient_card_number, //身份证号
        patient_age: this.data.patient_age,  //就诊人年龄
        patient_id: this.data.patient_id
      }
    }
    app.ajax('POST', data, this.data.statusType == 'add' ? 'User/patient_add' :'User/patient_update_execute', res => {
      wx.showToast({
        title: this.data.statusType == 'add' ? '添加成功!' : '修改成功',
        duration: 1000,
        mask: true,
        success: function(res) {
          setTimeout(function() {
            wx.navigateBack({
              delta: 1,
            })
          }, 1000)
        },
        fail: function(res) {
          console.log(res)
        },
        complete: function(res) {
          console.log(res)
        },
      })
    })
  }
})