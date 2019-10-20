// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
import {setStorageUserLocation} from "../../utils/storage.js";
var wxMarkerData = [];
Component({
  properties: {
    userLocation:{
      type:String
    }
  },
  data: {
    // 经度
    latitude: '',
    // 纬度
    longitude: '',
    // 标记
    markers: [
      {
        address:"东莞市健申大厦",
        alpha:1,
        iconPath:"/static/images/jingguan.png",
        iconTapPath:"/static/images/manxing.jpg",
        id:0,
        latitude: 23.02272,
        longitude: 113.75373,
        title:"东莞市健申大厦"
      },
      {
        address: "东莞山庄",
        alpha: 1,
        iconPath: "/static/images/jingguan.png",
        iconTapPath: "/static/images/marker_red.png",
        id: 0,
        latitude: 23.02574,
        longitude: 113.74900,
        title: "东莞山庄"
      },
      {
        address: "东莞市体育馆",
        alpha: 1,
        iconPath: "/static/images/jingguan.png",
        iconTapPath: "/static/images/marker_red.png",
        id: 0,
        latitude: 23.02463,
        longitude: 113.74834,
        title: "东莞市体育馆"
      },
      {
        address: "富乐家传统包点",
        alpha: 1,
        iconPath: "/static/images/jingguan.png",
        iconTapPath: "/static/images/marker_red.png",
        id: 0,
        latitude: 23.02311,
        longitude: 113.74797,
        title: "富乐家传统包点"
      }
    ],
    // 路线规划经纬度
    polyline: [{
      color: "#ff000088",
      width: 5,
      points: [
        {
          latitude: "23.02067",
          longitude: "113.75179"
        },
        {
          longitude: "113.75191",
          latitude: "23.02109"
        },
        {
          latitude: "23.02132",
          longitude: "113.75097",
        },
        {
          latitude: "23.02274",
          longitude: "113.75092",
        },
        {
          latitude: "23.02286",
          longitude: "113.75095",
        },
        {
          latitude: "23.02310",
          longitude: "113.74994",
        }
      ]
    }]
  },
  methods: {
    makertap: function (e) {
      var that = this;
      var id = e.markerId;
      const { markers } = this.data
    },
    newMap() {
      const that = this;
      // 新建百度地图对象 
      let BMap = new bmap.BMapWX({
        ak: 'AiVhdpRO5R8bGu9fpRXDmAlG5RIhIGM1'
      });
      BMap.regeocoding({
        success: (res) => {
          wxMarkerData = res.wxMarkerData;
          setStorageUserLocation(wxMarkerData)
          this.triggerEvent("userLocation", wxMarkerData)
          console.log(wxMarkerData[0])
          that.setData({
            longitude: wxMarkerData[0].longitude,
            latitude: wxMarkerData[0].latitude,
          });
        },
        fail: (err) => {
          console.log(err)
        },
        iconPath: '/static/images/jingguan.png',
        iconTapPath: '/static/images/jingguan.png'
      });
    },
  },
  // 新建百度地图对象
  attached() {
    this.newMap()
  }
})