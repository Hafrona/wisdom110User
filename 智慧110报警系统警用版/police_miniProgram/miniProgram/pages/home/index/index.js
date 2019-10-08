//index.js
var bmap = require('../../../utils/bmap-wx.min.js');
var wxMarkerData = [];
//获取应用实例
const app = getApp()
let that
Page({
  data: {
    ifMask:false, //显示蒙层
    ifShowMenu :false, //显示菜单
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {}
  },

  // 显示菜单
  showMenu(){
    that.setData({
      ifShowMenu : true,
      ifMask : true
    })
  },

  // 点击蒙层关闭菜单
  ifMask(){
      that.setData({
        ifShowMenu: false,
        ifMask: false
      })
      
  },
  // 点击进入出警页面
  onCase(){
    wx.navigateTo({
      url: '../../my/card/card',
    })
  },

  makertap: function (e) {
    console.log(e)
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'DdZVV8h2cPZSwTZIvXN7BfGBMikCH5Lw'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      console.log(data)
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起POI检索请求 
    BMap.search({
      "query": '酒店',
      fail: fail,
      success: success,
      width:35,
      height : 35,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../../assets/images/warning.png',
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../../assets/images/warning.png',
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },

  /**
   *生命周期函数--监听页面数据加载
   */
  onShow() {
    that = this
  },
})