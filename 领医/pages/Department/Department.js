//获取应用实例
const app = getApp();

Page({
  data: {
    ImageHost: app.ImageHost,
    clinicList: [],
    clinic_id: '',
    selectIndex:0,
    clinic_name: '',
    clinic_laboratory: '',
    show:false
  },

  onLoad: function (options) {
    this.setData({
      clinic_id: app.globalData.clinic_id,
      clinic_name: app.globalData.clinic_name,
      clinic_laboratory: app.globalData.clinic_laboratory
    });
    app.ajax('POST',{
      user_token:app.globalData.user_token,
      clinic_id: app.globalData.clinic_id
    },'Index/subjects_list',res=>{
      console.log(res)
      this.setData({
        clinicList: res.data.data,
        show:true
      })
    })
  },
  tochanges(e) {
    this.setData({
      selectIndex: e.currentTarget.dataset.index,
    })
    wx.navigateTo({
      url: `/pages/selectDoctor/selectDoctor?subjects_id=${e.currentTarget.dataset.id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    // setTimeout(() => {
      
    // }, 500)
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: '选择科室',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
