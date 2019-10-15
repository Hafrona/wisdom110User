/**
 * @param {Object} data 要填充的数据
 */
// 用户当前的位置存储到本地
export const setStorageUserLocation= (data) => {
  return wx.setStorageSync("userLocation", data)
}
// 获取用户当前的位置
export const getStorageUserLocation= () =>{
  return wx.getStorageSync("userLocation")
}


// 拍照的数据存到本地存储
export const setStorageImage = (data) =>{
  return wx.setStorageSync("photoData", data)
}
// 按键分类页面拿到拍照的数据
export const getStorageImage = ()=>{
  return wx.getStorageSync("photoData")
}
