// pages/my/evaluate/evaluate.js
let that;
var app = getApp()
const CHARTS = require('../../../assets/js/wxcharts-min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      date:'2019-08',
      star:[1,2,3,4,5],
      star1:'../../../assets/images/full_star.png',
      star2 : '../../../assets/images/empty_star.png'
  },
  // 选择时间
  bindDateChange(e){
    that.setData({
      date : e.detail.value
    })
  },
  lineShow(type) {
      let line = {
        canvasId: 'lineGraph', // canvas-id
        type: 'line', // 图表类型，可选值为pie, line, column, area, ring
        categories: ['01', '02', '03', '04', '05','06','07'],
        series: [{ // 数据列表
          name: ' ',
          data: [100, 70, 302, 41, 205,80,400]
        }],
        yAxis: {
          min: 0 // Y轴起始值
        },
        width: 300,
        height: 150,
        dataLabel: false, // 是否在图表中显示数据内容值
        legend: false, // 是否显示图表下方各类别的标识
        extra: {
          lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
        }
      }
    new CHARTS(line);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    that.lineShow()
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