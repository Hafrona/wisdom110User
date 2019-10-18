import { getStorageImage,getStorageUserLocation } from "../../utils/storage.js"
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
    location:"请输入当前地址",
    // 图片
    pic:[],
    photoData:[],
    ifAnimation:false
  },
  onLoad(){
    this.location()
  },
  onShow() {
    let { photoData } = this.data
    photoData = getStorageImage()
    this.setData({
      photoData
    })
  },
  onUnload() {
    if (this.data.photoData) {
      wx.removeStorageSync("photoData")
    }
  },
  // 点击弹框
  openParticulars(){
    let { ifAnimation } = this.data
    let { classifyParticulars } = this.data
    this.setData({
      ifAnimation:!ifAnimation,
      classifyParticulars:false
    })
  },
  // 点击添加图片显示拍照界面
  addImageVideo(){
    wx.navigateTo({
      url: '/pages/camera/index',
    })
  },
  // 查看图片
  lookImage(){
    console.log(this.data.pic)
  },
  // 点击遮罩层隐藏弹框
  maskShow(){
    let { classifyParticulars } = this.data
    let { ifAnimation } = this.data
    this.setData({
      ifAnimation:!ifAnimation
    })
    setTimeout(()=>{
      this.setData({
        classifyParticulars: true
      })
    },350)
    
  },

  stopMask(){
  },
  // 点击确定按钮跳转
  confirm(){
    this.setData({
      ifAnimation:false,
      classifyParticulars:true
    })
    wx.navigateTo({
      url: '/pages/callPoliceSucceed/index',
    })
  },
  // 本地存储中拿到用户的当前位置
  location(){
    let userLocation = getStorageUserLocation()
    const { address } = userLocation[0]
    this.setData({
      location: address
    })
  },
  // 跳转到添加常用地址
  frequently(){
    wx.navigateTo({
      url: '/pages/frequentlyLocation/index',
    })
  }
})