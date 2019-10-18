Page({
  data: {
    labelData:[
      {name:"家",id:1},
      { name: "公司", id: 2 },
      { name: "学校", id: 3 },
      { name: "网吧", id: 4 }
    ],
    labelShow:[],
    // 默认地区
    region: []
  },
  onLoad: function (options) {
    this.label()
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    console.log(this.data.region)
  },
  // 标签只显示三条，如果大于三条就等于三
  label(){
    const {labelData} = this.data
    let { labelShow } = this.data
    labelData.map(v=>{
      labelShow.push(v)
      if(labelShow.length > 3){
        labelShow.length = 3
      }
    })
    this.setData({
      labelShow
    })
  },
  formSubmit(e){
    console.log(e.detail.value)
  }
})