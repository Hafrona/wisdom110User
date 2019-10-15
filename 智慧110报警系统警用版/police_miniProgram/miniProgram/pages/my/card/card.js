// pages/my/card/card.js
const app = getApp()
let that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '', //当前的时间
    currentLocation: '', //当前定位位置
    date: new Date(), //当前显示的日期
  },
  // 获取当前的日期
  getCurrentDate(){
    var date = new Date()
    // 当前时间[y-m]
    var currentYear = date.getFullYear()
    var currentMonth = date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
    var currentDay = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    that.setData({
      date: currentYear + '.' + currentMonth + '.' + currentDay
    })
  },
  // 获取当前时间
  getCurrentTime() {
    setInterval(() => {
      var date = new Date()
      var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      var time = hour + ':' + minutes + ':' + second
      that.setData({
        time: time
      })
    }, 1000)
  },
  // 获取当前的位置
  getLocation() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res)
        if (res) {
          wx.request({
            url: `http://api.map.baidu.com/reverse_geocoding/v3/?ak=DdZVV8h2cPZSwTZIvXN7BfGBMikCH5Lw&output=json&coordtype=wgs84ll&location=${res.latitude},${res.longitude}`,
            method: 'GET',
            success(res) {
              wx.hideLoading()
              that.setData({
                currentLocation: res.data.result.formatted_address
              })
            }
          })
        }
      },
    })
  },

  // 日期选择器
  bindDateChange(e) {
    console.log(e)
    let date = e.detail.value.split('-').join('.')
    that.setData({
      date: date
    })
  },
  // 打卡
  clockIn() {
    wx.showToast({
      title: '打卡成功',
      icon: 'none'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    that.getCurrentTime()
    that.getLocation()
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
    that.getCurrentDate()
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