Page({
  data: {
    // 拍摄的照片数据
    photoData:[],
    // 预览里面显示最后拍的一张图
    showPhoto:{},
    // 视频数据
    videoSrc:""
  },
  onLoad: function (options) {
    this.camera = wx.createCameraContext();
  },
  onUnload: function () {
    wx.setStorageSync("photoData", this.data.photoData)
  },
  // 手指触摸按钮之后触发
  handleTouchStart(e){
    this.startTime = e.timeStamp;
  },
  // 手指松开按钮之后触发
  handleTouchEnd(e){
    this.endTime = e.timeStamp;
    if (this.endTime - this.startTime > 350) {
      this.stopVideo()
    }
  },
  // 点击超过350ms触发
  handleLongPress() {
    this.startVideo()
  },
  // 点击触发
  handleClick(){
    if (this.endTime - this.startTime < 350) {
      this.takephoto()
    }
  },
  // 开始拍照
  takephoto(){
    let that = this
    let { photoData } = that.data
    let id = 0;
    that.camera.takePhoto({
      quality: 'high',
      success: (res) => {
        let imageSrc = {};
        const { tempImagePath } = res
        if (photoData.length === 0){
          id++
        }else{
          photoData.map(v=>{
            id = v.id+1
          })
        }
        imageSrc.id = id;
        imageSrc.src = tempImagePath;
        photoData.push(imageSrc)
        that.setData({
          photoData: photoData,
          showPhoto: photoData[id - 1]
        })
      },
      fail() {
        console.log("拍照失败");
      }
    })
  },
  //开始录像
  startVideo(){
    this.camera.startRecord({
      success:(res) =>{
        console.log(res)
      }
    })
  },
  // 结束录像
  stopVideo(){
    const that = this
    let { photoData } = that.data
    let id = 0;
    this.camera.stopRecord({
      success: (res) => {
        const { tempVideoPath, tempThumbPath } = res
        let imageSrc = {};
        if (photoData.length === 0) {
          id++
        } else {
          photoData.map(v => {
            id = v.id + 1
          })
        }
        imageSrc.id = id;
        imageSrc.src = tempThumbPath;
        imageSrc.video = tempVideoPath;
        photoData.push(imageSrc)
        that.setData({
          photoData: photoData,
          showPhoto: photoData[id - 1]
        })
      }
    })
  }
})