Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  // 组件的属性列表
  properties: {
    BtnWidth: {
      type: String,
      value: '96',
      observer: function (newVal, oldVal, changedPath) { }
    }
  },
  // 组件的初始数据
  data: {
    startX: 0,
    styleRight: '100%'
  },
  // 组件的方法列表
  methods: {
    asdas: function(){
      console.log('click');
    },
    
    //左滑删除
    touchS: function (e) {
      //判断是否只有一个触摸点
      if (e.touches.length == 1) {
        this.setData({
          //记录触摸起始位置的X坐标
          startX: e.touches[0].clientX
        });
      }
    },
    del(){
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('del', myEventDetail, myEventOption)
    },
    //触摸时触发，手指在屏幕上每移动一次，触发一次
    touchM: function (e) {
      var that = this
      if (e.touches.length == 1) {
        //记录触摸点位置的X坐标
        var moveX = e.touches[0].clientX;
        //计算手指起始点的X坐标与当前触摸点的X坐标的差值
        var disX = that.data.startX - moveX;
        //delBtnWidth 为右侧按钮区域的宽度
        var delBtnWidth = that.properties.BtnWidth;
        var styleRight = "";
        if (disX <= 0) {//如果移动距离小于等于0，文本层位置不变
          styleRight = "100%";
        } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
          styleRight = "-" + (delBtnWidth-disX) + "rpx";
          if (disX >= delBtnWidth) {
            //控制手指移动距离最大值为删除按钮的宽度
            styleRight = "0";
          }
        }
        this.setData({
          styleRight: styleRight
        });
      }
    },
    touchE: function (e) {
      console.log(e);
      var that = this
      if (e.changedTouches.length == 1) {
        //手指移动结束后触摸点位置的X坐标
        var endX = e.changedTouches[0].clientX;
        //触摸开始与结束，手指移动的距离
        var disX = that.data.startX - endX;
        var delBtnWidth = that.properties.BtnWidth;
        //如果距离小于删除按钮的1/2，不显示删除按钮
        var styleRight = disX > delBtnWidth / 2 ? "0" : "100%";
        //获取手指触摸的是哪一项
        // var index = e.currentTarget.dataset.index;
        this.setData({
          styleRight: styleRight
        });
      }
    }

  },
  //生命周期函数-在组件实例进入页面节点树时执行
  attached: function () {

  },
})
