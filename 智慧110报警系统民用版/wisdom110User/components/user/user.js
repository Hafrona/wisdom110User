// components/user/user.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userNav: [{
        name: '搜索历史',
        id: 1,
        icon: '.icon-zhankai'
      },
      {
        name: '实名认证',
        id: 2,
        icon: '.icon-anquan'
      },
      {
        name: '常用地址',
        id: 3,
        icon: '.icon-dizhi1'
      },
      {
        name: '设置',
        id: 4,
        icon: '.icon-shezhi'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    maskEnter() {
      let animation = wx.createAnimation({
        duration: 4000,
        timingFunction: 'ease'
      })
      this.triggerEvent('userHidden',false)
    }
  }
})