//index.js
//获取应用实例

const app = getApp()
let that
Page({
  data: {
    ifMask: false, //显示蒙层
    ifShowMenu: false, //显示菜单
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {},
    localAddress:'' //当前位置
  },


  /**
   * 首页显示附近发生的案件
   * @param caseType 1、抢劫 2、纵火 3、盗窃 4、吸毒、5、斗殴 
   * @param policeType 1、警官 2、协警 3、摩警
   */
  showCase() {
    let markers = []
    wx.request({
      url: 'http://127.0.0.1/data/taskType.json',
      method:'post',
      success: function(res) {
        console.log(res)
        res.data.data.forEach((item) => {
          let obj = {
            id: item.id,
            latitude: item.location.latitude,
            longitude: item.location.longitude,
            width:48,
            height:38,
            iconPath: item.iconPath,
            callout:{
              content:item.title,
              display:"ALWAYS",
              fontSize:"14",
              color:"#fff",
              padding:"5",
              borderRadius:"10",
              borderColor: '#EE6A50',
              bgColor:'#EE6A50'
            },
            label:{
              conent:'可增援',
              bgColor:'#EE9A00',
              anchorX	:.5,
              anchorY:.5,
              color:"#000"
            }
          }
          markers.push(obj)
        })
        that.setData({
          markers: markers
        })
        console.log(markers)
      }
    })
  },

  /**
   * 点击按钮回到自己的位置
   */
  clickcontrols(e){
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
  },
  // 显示菜单
  showMenu() {
    that.setData({
      ifShowMenu: true,
      ifMask: true
    })
  },

  /**
   * 背景蒙层
   */
  ifMask() {
    that.setData({
      ifShowMenu: false,
      ifMask: false
    })

  },
  /**
   * 获取用户当前的位置
   * @param latitude 纬度
   * @param longitude 经度
   */
  getLocation() {
    wx.getLocation({
      type: 'wgs84 ',
      success: function(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        let url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=6UHBZ-D53A6-IWGSY-MZE4Q-XH3PE-ZSBJA`;
        wx.request({
          url: url,
          success:function(res){
            console.log(res)
            that.setData({
              localAddress: res.data.result.address
            })
          }
        })
      },
    })
  },
 
  // 出警历史
  clickHistory(){
    wx.navigateTo({
      url: '../../my/caseHistory/caseHistory',
    })
  },
  // 我的评价
  clickEvaluate(){
    wx.navigateTo({
      url: '../../my/evaluate/evaluate',
    })
  },
  // 巡逻打卡
  clickCard(){
    wx.navigateTo({
      url: '../../my/card/card',
    })
  },
  // 设置
  clickSetting(){
    wx.navigateTo({
      url: '../../my/caseHistory/caseHistory',
    })
  },
  // 点击进入出警页面
  onCase() {
    wx.navigateTo({
      url: '../../onCase/index/index',
    })
  },
  onLoad: function() {
    that = this
    that.showCase()
    that.getLocation()
  },
  /**
   *生命周期函数--监听页面数据加载
   */
  onShow() {
    that = this
  },
})