// pages/evaluate/index.js
Page({
  data: {
    labelNav: [{
        text: "出警速度快",
        id: 1,
        labelActive: false
      },
      {
        text: "办案能力强",
        id: 2,
        labelActive: false
      },
      {
        text: "服务态度好",
        id: 3,
        labelActive: false
      },
      {
        text: "英勇无畏",
        id: 4,
        labelActive: false
      }
    ],
    footerText:"提交评价",
    headTitle:"评价",
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/static/images/kongxing.jpg',
    selectedSrc: '/static/images/manxing.jpg',
    halfSrc: '/static/images/banxing.jpg',
    key: 0,//评分
  },
  onLoad: function(options) {

  },
  labelNavClick(data){
    const { index } = data.currentTarget.dataset
    let label = this.data.labelNav
    label.map(v=>{
      if(v.id === index){
        if (v.labelActive === true){
          v.labelActive = false;
          this.setData({
            labelNav: label
          })
        }else{
          v.labelActive = true;
          this.setData({
            labelNav: label
          })
        }
      }
    })
  },
  upEvaluateData(){
    const {labelNav} = this.data
    let newLabelNav = [];
    labelNav.map(v=>{
      if(v.labelActive === true){
        newLabelNav.push(v)
      }
    })
  },
  //点击左半边,半颗星
  selectLeft: function (e) {
    console.log(e)
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  },
  //点击右半边,整颗星
  selectRight: function (e) {
    console.log(e)
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  }
})