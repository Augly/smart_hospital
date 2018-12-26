// components/nodata/nodata.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: null,
      value: ''
    },
    mintitle:{
      type: null,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    togo() {
      const myEventDetail = {

      } // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('togo', myEventDetail, myEventOption)
    },
  }
})
