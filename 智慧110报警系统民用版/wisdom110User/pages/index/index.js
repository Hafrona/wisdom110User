// import { startLocationUpdate } from '../../utils/asyncWx.js'
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
import {
  setStorageUserLocation
} from "../../utils/storage.js";
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
    ],
    ifAnimation: false,

    server:{
      distance: 23270,
      duration: 10677,
      arrive_time: "2017-04-26 20:44:00",
      price: 129.5,
      price_detail: [],
      steps: [
        [
          {
            distance: 1277,
            duration: 1021,
            instructions: "步行1277米",
            path: "116.94460025367,36.63355502879;116.94460025367,36.63355502879;116.94469906728,36.633236457119;116.94454635534,36.630839886738;116.9444744909,36.627690201059;116.94443855868,36.627552625622;116.94437567729,36.627444013259;116.94434872813,36.627393327437;116.94181550659,36.629724840449;116.94146516744,36.6299710209;116.94062974332,36.630673354884;116.94056686193,36.630246162817;116.9405129636,36.62979000594",
            traffic_condition: [],
            start_location: {
              lng: 116.94528296586,
              lat: 36.633772235985
            },
            end_location: {
              lng: 116.94048601443,
              lat: 36.62979000594
            },
            vehicle_info: {
              type: 5,
              detail: null
            }
          },
          {
            distance: 3828,
            duration: 878,
            instructions: "前魏华庄站乘9路(火车站方向)经过8站到经十路段兴西路站",
            path: "116.94048601443,36.62979000594;116.94055787888,36.632671713166;116.94045906527,36.635176827602;116.94089923497,36.641895341563;116.94060279415,36.645609093992;116.94040516694,36.64725959265;116.94048601443,36.647599822587;116.940252455,36.651009277163;116.9400727939,36.651972004283;116.94000991251,36.656937456611;116.94080042136,36.656951932676;116.94708855993,36.65657555409;116.94730415326,36.656691363083;116.94893906928,36.656568316022",
            traffic_condition: [],
            start_location: {
              lng: 116.94048601443,
              lat: 36.62979000594
          },            end_location: {
              lng: 116.94893906928,
              lat: 36.65657555409
          },            vehicle_info: {
              type: 3,
              detail: {
                name: "9路",
                type: 0,
                stop_num: 8,
                on_station: "前魏华庄站",
                off_station: "经十路段兴西路站",
                first_time: "05:30",
                last_time: "21:00"
              }
            }
          }
        ]
      ]
    },

    polyline:[{
      color:"#ff000088",
      width:5,
      points:[
        {
          latitude: "23.0552839902",
          longitude: "113.7379963831"
        },
        {
          longitude: "113.7375082210",
          latitude: "23.0553580326"
        },
        {
          latitude: "23.0563551338", 
          longitude: "113.7377925352",
        },
        {
          latitude: "23.0565723232", 
          longitude: "113.7379159168",
        }
      ]
    }]
  },
  makertap: function(e) {
    var that = this;
    var id = e.markerId;
    // that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function() {
    console.log(this.data.polyline)
    this.newMap()
  },
  // 新建百度地图对象
  newMap() {
    const that = this;
    // 新建百度地图对象 
    let BMap = new bmap.BMapWX({
      ak: 'AiVhdpRO5R8bGu9fpRXDmAlG5RIhIGM1'
    });
    let fail = function(data) {
      console.log(data)
    };
    let success = data => {
      wxMarkerData = data.wxMarkerData;
      setStorageUserLocation(wxMarkerData)
      that.setData({
        markers: wxMarkerData,
        longitude: wxMarkerData[0].longitude,
        latitude: wxMarkerData[0].latitude,
        rgcData: {
          address: '您当前的位置：' + wxMarkerData[0].address,
        }
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
  //路线规划
  guiHua(){
    let that = this
    let { steps } = this.data.server
    // var steps = this.data.mapData.steps;//获取步骤集合
    var polyline = [];
    steps.map(function (item, index) {
      //item 为路线里面的每一大步
      if (item && item.length > 0) {
        item.map(function (step, index) {
          //step 为每一大步里面的每一小阶段
          var path = step.path;//取出该阶段的path，关键点的经纬度集合。
          if (path) {
            var arr = path.split(";");//通过上面的json数据，我们可以看到path存储的关键点使用“;”隔开的，这里我们通过这一项把它转换成数组进行操作。
            arr.map(function (point, index) {
              //point为每一个坐标点，格式为"116.94048601443,36.62979000594",逗号前面是longitude，逗号后面是latitude;
              var pointarr = point.split(",");//我们再把每一个点转成数组，以方便我们操作。
              if (pointarr.length == 2) {
                //把我们取到的每一个点以微信官方要求的数据结构push到一个polyline数组里面去。
                polyline.push({
                  longitude: pointarr[0],
                  latitude: pointarr[1]
                });
                //最后我们将polyline数组setData到微信组件里去。
                that.setData({
                  "polyline": [{
                    "points": polyline,
                    "color": "#ff000088",
                    "width": 5
                  }]
                })
              }
            })
          }
        })
      }
    })
    console.log(this.data.polyline)
  },



  // 点击左上角我的，进入我的页面
  user() {
    let {
      userShow
    } = this.data
    let {
      ifAnimation
    } = this.data
    this.setData({
      ifAnimation: !ifAnimation,
      userShow: !userShow
    })
  },
  // 点击遮罩层关闭侧边菜单
  maskEnter() {
    let {
      userShow
    } = this.data
    let {
      ifAnimation
    } = this.data
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
  }
})