// import { startLocationUpdate } from '../../utils/asyncWx.js'
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    // 标记
    markers: [],
    // 经度
    latitude: '',
    // 纬度
    longitude: '',
    // 位置信息
    rgcData: {},
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
    ]
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    // that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    const that = this;
    // 新建百度地图对象 
    let BMap = new bmap.BMapWX({
      ak: 'AiVhdpRO5R8bGu9fpRXDmAlG5RIhIGM1'
    });
    let fail = function (data) {
      console.log(data)
    };
    let success =  data => {
      wxMarkerData = data.wxMarkerData;
      wx.setStorageSync("userLocation", wxMarkerData)
      that.setData({
        markers: wxMarkerData,
        longitude: wxMarkerData[0].longitude,
        latitude: wxMarkerData[0].latitude
      });
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '/static/images/marker_red.png',
      iconTapPath: '/static/images/marker_red.png'
    });

  },
  // 点击显示当前位置
  // showSearchInfo: function (data, i) {
  //   var that = this;
  //   that.setData({
  //     rgcData: {
  //       address: '您当前的位置：' + data[i].address,
  //       desc: '描述：' + data[i].desc,
  //     }
  //   });
  // },
  // 地图标记
  changeMarkerColor: function (data, i) {
    var that = this;
    data.map(v => {
      v.id === i ? v.iconPath = "/static/images/marker_yellow.png" : v.iconPath = "/static/images/marker_red.png";
    })
    that.setData({
      markers: data
    });
  },
  verificationCode(){
    
  },
  // 点击左上角我的，进入我的页面
  user() {
    let {
      userShow
    } = this.data
    this.setData({
      userShow: !userShow
    })
  },
  // 点击遮罩层关闭侧边菜单
  maskEnter() {
    let {
      userShow
    } = this.data
    this.setData({
      userShow: !userShow
    })
  },
  // 点击我要报警之后跳转到出警页面
  callThePolice() {
    wx.navigateTo({
      url: '/pages/classify/index'
    })
  },
  navIndex(index) {
    var { index } = index.currentTarget.dataset
    let { userNav } = this.data
    wx.navigateTo({
      url: userNav[index].url,
    })
  }
})