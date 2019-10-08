// pages/onCase/working/working.js
let that;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpen:false,//打开请求增援
    openTab:false,//打开案发现场
    imgs: [
      { url:'../../../assets/images/richu_riluo-001.jpg'},
      { url: '../../../assets/images/richu_riluo-002.jpg' },
      { url: '../../../assets/images/richu_riluo-004.jpg' }
      ],

  },
  // 请求增援
  openBox(){
    that.setData({
      isOpen:!that.data.isOpen
    })
  },
  // 案发现场
  openTab(){
    that.setData({
      openTab: !that.data.openTab
    })
  },
  // 点击蒙层
  closeMask(){
    that.setData({
      isOpen : false,
      openTab : false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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