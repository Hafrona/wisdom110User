export const startLocationUpdate = () =>{
  return new Promise((resolve,reject)=>{
    wx.startLocationUpdate({
      success:result =>{
        resolve(result);
      },
      fail:err =>{
        reject(err);
      }
    })
  })
}