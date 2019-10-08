var app = getApp()
let that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPullUp: false,
    dateIcon:'../../../assets/images/clock.png',
    addrIcon:'../../../assets/images/address.png',
    Down:'../../../assets/images/arrow-down.png',
    Up: '../../../assets/images/arrow-right.png',
    historyArray: [{
        id: 0,
        type: '抢劫',
        date: '2019-08-26',
        time: '16:37:11',
        address: '福建省莆田市城厢区梅园路88号'
      },
      {
        id: 1,
        type: '斗殴',
        date: '2019-08-26',
        time: '16:37:11',
        address: '福建省莆田市城厢区梅园路88号'
      },
      {
        id: 2,
        type: '打架',
        date: '2019-08-26',
        time: '16:37:11',
        address: '福建省莆田市城厢区梅园路88号'
      },
      {
        id: 3,
        type: '抢劫',
        date: '2019-08-26',
        time: '16:37:11',
        address: '福建省莆田市城厢区梅园路88号'
      },
      {
        id: 4,
        type: '抢劫',
        date: '2019-08-26',
        time: '16:37:11',
        address: '福建省莆田市城厢区梅园路88号'
      }
    ]
  },
  // 点击上拉事件
  clickHandle(e) {
    let index = 0;
    let arrayItem = that.data.historyArray;
    for(let item of arrayItem){
      if (item.id == e.currentTarget.dataset.id){
        if (arrayItem[index].isShow == '' || arrayItem[index].isShow == undefined || arrayItem[index].isShow == 'false'){
          arrayItem[index].isShow = true
        }else{
          arrayItem[index].isShow = false
        }
      }
      index++
    }

    // for (let item in arrayItem){
    //   if(item.id == e.currentTarget.dataset.id){
    //     if(arrayItem[index].isShow == '' || arrayItem[index].isShow == undefined){
    //         arrayItem[index].isShow = 'true'
    //     }else{
    //         arrayItem[index].isShow = ''
    //     }
    //   }
    //     index++
    // }
    that.setData({
      historyArray : arrayItem
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
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