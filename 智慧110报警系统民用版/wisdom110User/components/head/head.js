// components/head/head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headTitle:{
      type:String
    }
  },
  data: {

  },
  methods: {
    closePage(){
      wx.navigateBack({
        delta:1
      })
    }
  }
})
