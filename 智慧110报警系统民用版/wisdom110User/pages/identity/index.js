Page({
  data: {
    footerText: "立即认证",
    headTitle: "身份认证",
    userImages:"",
    IdentityImage:"",
  },
  onLoad: function (options) {
    
  },
  // 上传个人照片
  upUserImage() {
    let that = this
    wx.chooseImage({
      count:1,
      sizetype: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const { tempFilePaths } = res
        that.setData({
          userImages: tempFilePaths
        })
        console.log(that.data.userImages)
      },
    })
  },
  // 上传证件照片
  upIdentityNumber(){
    let that = this
    wx.chooseImage({
      count: 1,
      sizetype: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        const { tempFilePaths } = res
        that.setData({
          IdentityImage: tempFilePaths
        })
      },
    })
  }
})