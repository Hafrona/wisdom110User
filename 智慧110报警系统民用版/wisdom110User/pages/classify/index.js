// pages/classify/index.js
Page({
  data: {
    classifyNav:[
      {name:'抢劫',id:1},
      { name: '斗殴', id: 2 },
      { name: '盗窃', id: 3 },
      { name: '诈骗', id: 4 },
      { name: '放火', id: 5 },
      { name: '贩毒', id: 6 },
      { name: '强奸', id: 7 },
      { name: '其他', id: 8 }
    ],
    classifyParticulars:true,
    location:"请输入当前地址"
  },
  onLoad(){
    this.location()
  },
  // 点击弹框
  openParticulars(){
    let { classifyParticulars } = this.data
    this.setData({
      classifyParticulars:false
    })
  },
  // 点击遮罩层隐藏弹框
  maskShow(){
    let { classifyParticulars } = this.data
    this.setData({
      classifyParticulars: true
    })
  },

  stopMask(){
  },
  // 点击确定按钮跳转
  confirm(){
    this.setData({
      classifyParticulars:true
    })
    wx.navigateTo({
      url: '/pages/callPoliceSucceed/index',
    })
  },
  // 本地存储中拿到用户的当前位置
  location(){
    let userLocation = wx.getStorageSync("userLocation")
    const { address } = userLocation[0]
    this.setData({
      location: address
    })
  }
})