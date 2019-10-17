
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '../../images/logo.jpg',
      id: 0,
      latitude: 34.780254,
      longitude: 113.699559,
      width: 30,
      height: 30,
      title: "【软银科技】\n网络营销领导者，让公司业绩倍增\n倍增热线：15136135201",
      callout: {
        content: "【软银科技】\n网络营销领导者，让公司业绩倍增\n倍增热线：15136135201",
        color: "#2c8df6",
        fontSize: 20,
        borderRadius: 10,
        bgColor: "#fff",
        display: "ALWAYS",
        boxShadow: "2px 2px 10px #aaa"
      },
      label: {
        color: "#000",
        fontSize: 12,
        content: "为标记点旁边增加标签",
        x: 34.780439,
        y: 113.699774
      }
    }],
    polyline: [{
      points: [{
        latitude: 34.780254,
        longitude: 113.699559

      }, {
        longitude: 113.701855,
        latitude: 34.779778
      }],
      color: "#ff6600",
      width: 2,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }],
    controls: [{
      id: 1,
      iconPath: '../../static/images/manxing.jpg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //拨打手机号码
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: '15136135201',
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
})