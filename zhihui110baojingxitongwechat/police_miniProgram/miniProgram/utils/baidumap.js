var bmap = require('bmap-wx.min.js')
let akey = 'DdZVV8h2cPZSwTZIvXN7BfGBMikCH5Lw' // 百度地图应用AK
// 创建百度地图新对象
var BMap = new bmap.BMapWX({
  ak : akey
})

class BaiduMap{
  /**
   * 获取POI数据
   * @param {string} querykeywords
   *  
   */
  static getPointAround(querykeywords = ''){
    return new Promise((resolve, reject) => BMap.getPointAround({querykeywords,success:resolve,fail : reject}));
  }
}
module.exports = BaiduMap;

