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
    headTitle:"评价"
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
  }
})