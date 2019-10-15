import { setStorageImage } from "../../utils/storage.js"
import { takePhoto, startRecord, stopRecord } from "../../utils/asyncWx.js"
Page({
  data: {
    // 拍摄的照片数据
    photoData: [],
    // 预览里面显示最后拍的一张图
    showPhoto: {},
    // 视频数据
    videoSrc: ""
  },
  onLoad: function (options) {
    this.camera = wx.createCameraContext();
  },
  onUnload: function () {
    setStorageImage(this.data.photoData)
  },
  // 手指触摸按钮之后触发
  handleTouchStart(e) {
    this.startTime = e.timeStamp;
  },
  // 手指松开按钮之后触发
  handleTouchEnd(e) {
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
  handleClick() {
    if (this.endTime - this.startTime < 350) {
      this.takephoto()
    }
  },
  // 开始拍照
  takephoto() {
    let that = this
    let { photoData } = this.data
    let id = 0;
    takePhoto(this.camera).then(res => {
      let imageSrc = {};
      const { tempImagePath } = res
      // 给每张图片加一个id
      if (photoData.length === 0) {
        id++
      } else {
        photoData.map(v => {
          id = v.id + 1
        })
      }
      imageSrc.id = id;
      imageSrc.src = tempImagePath;
      photoData.push(imageSrc)
      that.setData({
        photoData: photoData,
        showPhoto: photoData[id - 1]
      })
    })
  },
  //开始录像
  startVideo() {
    startRecord(this.camera).then(res => {
      console.log(res)
    })
  },
  // 结束录像
  stopVideo() {
    let that = this
    let { photoData } = this.data
    let id = 0;
    stopRecord(this.camera).then(res=>{
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
    })
  }
})