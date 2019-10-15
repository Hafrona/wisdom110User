// pages/onCase/working/working.js
let that;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpen: false, //打开请求增援
    openTab: false, //打开案发现场
    polyline: [],
    markers: [{
      iconPath: "/assets/images/car.png",
      id: 0,
      latitude: 23.02067,
      longitude: 113.75179,
      width: 40,
      height: 30
    }],
    latitude: '',
    longitude: '',
    imgs: [{
        url: '../../../assets/images/richu_riluo-001.jpg'
      },
      {
        url: '../../../assets/images/richu_riluo-002.jpg'
      },
      {
        url: '../../../assets/images/richu_riluo-004.jpg'
      }
    ],
  },

  /**
   * 百度地图路线规划
   * @param zz
   */

  routePlan() {
    let points = [] //经纬度存放数组
    wx.getLocation({
      success: function(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        let url = `http://api.map.baidu.com/direction/v2/driving?origin=23.02685,113.76855&destination=23.02067,113.75279&ret_coordtype=gcj02&ak=DdZVV8h2cPZSwTZIvXN7BfGBMikCH5Lw`
        wx.request({
          url: url,
          method: 'GET',
          success: function(res) {
            console.log(res)
            let steps = res.data.result.routes[0].steps
            wx.setStorageSync("steps", steps)
            steps.forEach(item1 => {
              let pathLen = item1.path.split(';')
              pathLen.forEach(item2 => {
                let obj = {
                  latitude: parseFloat(item2.split(',')[1]),
                  longitude: parseFloat(item2.split(',')[0])
                }
                points.push(obj) //将取到的经纬度存放进数组中
              })
            })
            that.setData({ 
              polyline: [{
                points: points,
                color: "#ff6600",
                width: 8,
                dottedLine: false,
                arrowLine: true,
                borderColor: "#000",
                borderWidth: 5
              }],
             
            })
          },
          error: function(err) {
            console.log(err)
          }
        })
      },
    })
  },

  // 请求增援
  openBox() {
    that.setData({
      isOpen: !that.data.isOpen
    })
  },
  // 案发现场
  openTab() {
    that.setData({
      openTab: !that.data.openTab
    })
  },
  // 点击蒙层
  closeMask() {
    that.setData({
      isOpen: false,
      openTab: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    that.routePlan()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})