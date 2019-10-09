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
    unfoldAnimation: {},
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
    const { index } = data.currentTarget.dataset
    let { incidentList } = this.data
    if (incidentList[index].unfoldIndex === false) {
      incidentList[index].unfoldIndex = true
    } else {
      incidentList[index].unfoldIndex = false;
    }
    this.setData({
      incidentList: incidentList
    })
  }

})