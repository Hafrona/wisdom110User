// pages/my/card/card.js
const app = getApp()
let that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time : ''
  },
  // 获取当前时间
  getCurrentTime(){
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
  getLocation(){
    wx.getLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    that.getCurrentTime()
    that.getLocation()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})