// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {},
    callPolice:[
      { text: "发信息", id: 1, icon:"icon-xinxi"},
      { text: "打电话", id: 2, icon:"icon-dianhua"},
      { text: "取消报警", id: 3, icon: "icon-quxiao" },
      { text: "选择路线", id: 4, icon: "icon-dizhi1" },
    ]
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'AiVhdpRO5R8bGu9fpRXDmAlG5RIhIGM1'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
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
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../static/images/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../static/images/marker_red.png'
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
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    data.map(v=>{
      v.id === i ? v.iconPath = "/static/images/marker_yellow.png" : v.iconPath = "/static/images/marker_red.png";
    })
    that.setData({
      markers: data
    });
  }
})