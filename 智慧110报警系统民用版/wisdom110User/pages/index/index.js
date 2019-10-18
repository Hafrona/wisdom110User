// import { startLocationUpdate } from '../../utils/asyncWx.js'
import { getStorageUserLocation } from "../../utils/storage.js"
Page({
  data: {
    // 我的页面是否显示
    userShow: true,
    //当前用户的位置
    userPlace: '',
    // 侧边菜单导航
    userNav: [{
        name: '搜索历史',
        id: 1,
        icon: '.icon-zhankai',
        url: "/pages/history/index"
      },
      {
        name: '实名认证',
        id: 2,
        icon: '.icon-anquan',
        url: "/pages/identity/index"
      },
      {
        name: '常用地址',
        id: 3,
        icon: '.icon-dizhi1',
        url: ''
      },
      {
        name: '设置',
        id: 4,
        icon: '.icon-shezhi',
        url: ""
      }
    ],
    ifAnimation: false,
    ifMyLocation:false
  },
  makertap: function(e) {
    var that = this;
    var id = e.markerId;
    // that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function() {
    let rgcData = getStorageUserLocation()
    
  },
  // 点击左上角我的，进入我的页面
  user() {
    let {userShow} = this.data
    let {ifAnimation} = this.data
    this.setData({
      ifAnimation: !ifAnimation,
      userShow: !userShow
    })
  },
  // 点击遮罩层关闭侧边菜单
  maskEnter() {
    let {userShow} = this.data
    let {ifAnimation} = this.data
    this.setData({
      ifAnimation: !ifAnimation
    })
    setTimeout(() => {
      this.setData({
        userShow: !userShow
      })
    }, 280)

  },
  // 点击我要报警之后跳转到出警页面
  callThePolice() {
    wx.navigateTo({
      url: '/pages/classify/index'
    })
  },
  navIndex(index) {
    var {
      index
    } = index.currentTarget.dataset
    let {
      userNav
    } = this.data
    wx.navigateTo({
      url: userNav[index].url,
    })
  },
  userLocationData(data){
    const { detail } = data
    let rgcData = detail[0]
    this.setData({
      rgcData: {
        address: '您当前的位置：' + rgcData.address,
      }
    })
  },
  // 点击定位到当前位置
  myLocation(){
    this.setData({
      ifMyLocation : true
    })
    let map = wx.createMapContext("map")
  }
})