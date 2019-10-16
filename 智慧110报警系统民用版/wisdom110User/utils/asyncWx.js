// 开始拍照
export const takePhoto = (camera) => {
  return new Promise((resolve,reject) =>{
    camera.takePhoto({
      quality: 'high',
      success: (result) => {
        resolve(result)
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}
// 开始录像
export const startRecord = (camera) =>{
  return new Promise((resolve,reject) =>{
    camera.startRecord({
      success: (result) => {
        resolve(result);
      },
      fail:(err) =>{
        reject(err);
      }
    })
  })
}
// 结束录像
export const stopRecord = (camera) =>{
  return new Promise((resolve,reject) =>{
    camera.stopRecord({
      success:(result) =>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
//上传个人照片
export const chooseImage = () =>{
  return new Promise((resolve,reject) =>{
    wx.chooseImage({
      count: 1,
      sizetype: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(result) =>{
        resolve(result)
      },
      fail:(err) =>{
        reject(err)
      }
    })
  })
}