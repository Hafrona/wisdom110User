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
    unfoldAnimation:{},
  },
  onLoad() {
    var time = util.formatTime(new Date());
    let newIncidentList = this.data.incidentList;
    newIncidentList.map(v => {
      v.time = time
    })
    this.setData({
      incidentList: newIncidentList
    });
  },
  unfold(data) {
    const { unfoldindex } = data.currentTarget.dataset
    
  }
})