// pages/classify/index.js
Page({
  data: {
    classifyNav:[
      {name:'抢劫',id:1},
      { name: '斗殴', id: 2 },
      { name: '盗窃', id: 3 },
      { name: '诈骗', id: 4 },
      { name: '放火', id: 5 },
      { name: '贩毒', id: 6 },
      { name: '强奸', id: 7 },
      { name: '其他', id: 8 }
    ],
    classifyParticulars:true,
  },
  openParticulars(){
    let { classifyParticulars } = this.data
    this.setData({
      classifyParticulars:false
    })
  },
  maskShow(){
    let { classifyParticulars } = this.data
    this.setData({
      classifyParticulars: true
    })
  },
  stopMask(){
  },
  confirm(){}
})