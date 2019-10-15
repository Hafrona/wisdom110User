// pages/history/index.js
var util = require('../../utils/util.js');
Page({
  data: {
    headTitle: "报警历史",
    incidentList: [{
      name: '抢劫',
      time: "",
      site: "福建省莆田市城厢区梅园路88号"
    },
    {
      name: '斗殴',
      time: "",
      site: "福建省莆田市城厢区梅园路88号"
    },
    {
      name: '盗窃',
      time: "",
      site: "福建省莆田市城厢区梅园路88号"
    },
    {
      name: '贩毒',
      time: "",
      site: "福建省莆田市城厢区梅园路88号"
    }
    ],
    animationIndex:"",
  },
  onLoad() {
    var time = util.formatTime(new Date());
    let { incidentList } = this.data
    incidentList.map(v => {
      v.unfoldIndex = true,
        v.time = time
    })
    this.setData({
      incidentList: incidentList
    })
  },
  // 点击展开收起
  unfold(data) {
    // 传过来的索引
    const { index } = data.currentTarget.dataset;
    // 历史纪录的数据
    let { incidentList } = this.data;
    // 当前点击的
    let { unfoldIndex } = incidentList[index];
    if(unfoldIndex){
      this.animationOpen()
      incidentList[index].unfoldIndex = false
    } else {
      this.animationClose()
      incidentList[index].unfoldIndex = true
    }
    this.setData({
      incidentList,
      animationIndex: index
    })
  },
  // 点击展开动画
  animationOpen() {
    let animation = wx.createAnimation({
      duration: 200,
    })
    animation.rotate(180).step();
    this.setData({
      unfoldAnimation: animation.export(),
    })
  },
  // 点击关闭动画
  animationClose(){
    let animation = wx.createAnimation({
      duration: 200,
    })
    animation.rotate(0).step();
    this.setData({
      closeAnimation: animation.export(),
    })
  }
})