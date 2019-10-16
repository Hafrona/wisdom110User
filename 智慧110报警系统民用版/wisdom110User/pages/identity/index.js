import { chooseImage } from "../../utils/asyncWx.js"
Page({
  data: {
    footerText: "立即认证",
    headTitle: "身份认证",
    userImages:"",
    identityImage:"",
  },
  onLoad: function (options) {
  },
  // 上传个人照片
  upUserImage() {
    let that = this
    chooseImage().then(res =>{
      const { tempFiles } = res
      that.setData({
        userImages: tempFiles[0].path
      })
    })
  },
  // 上传证件照片
  upIdentityNumber(){
    let that = this
    chooseImage().then(res => {
      console.log(res)
      const { tempFiles } = res
      that.setData({
        identityImage: tempFiles[0].path
      })
    })
  }
})