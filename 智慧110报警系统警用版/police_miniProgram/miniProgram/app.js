//app.js
let i ;
App({
  globalData: {
    userInfo: null,
    latitude:null,
    longitude:'',
  },
  onLaunch: function() {
    i = this
  },

  // 当前位置
  /**
   * POST请求数据
   * type : post -- POST请求
   * @param 
   * url : 接口路径
   * data : 需要的字段
   */
  post:function(url,data){
    var promise = new Promise((resolve,reject)=>{
      wx.request({
        url: url,
        data : data,
        method :'POST',
        header:{
          'content-type': 'application/x-www-form-urlencoded',
        },
        success:function(res){
          console.log(res)
          res.data.code == 200 ? resolve(res) : console.log(res)
        },
        error:function(errMsg){
          console.log(errMsg)
          reject('网络出错')
        }

      })
    });
    return promise;
  },
  
  /**
   * GET请求数据
   * type : GET
   * @param
   * url : 接口路径
   * data : 需要的字段
   */
  get: function (url, data) {
    var promise = new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        success: function (res) {
          console.log(res)
          resolve(res)
        },
        error: function (errMsg) {
          reject('网络出错')
        }
      })
    });
    return promise
  },
  /**
   * GET请求数据
   * @param
   * type : get2 -- GET2 无额外字段的GET请求
   * url : 接口路径
   */
  get2:function(url){
    var promise = new Promise((resolve,reject)=>{
      wx.request({
        url: url,
        method:'GET',
        success:function(res){
          console.log(res)
          resolve(res)
        },
        error:function(errMsg){
          console.log(errMsg)
          reject('网络错误')
        }
      })
    });
    return promise;
  },
})