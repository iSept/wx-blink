import { config, tips } from '../config/index.js';

class HTTP {
  // params: url, data, method, success
  request(params) {
    // [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
    wx.request({
      url: config.api_base_url + params.url,
      data: params.data,
      method: params.method || 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { // 设置请求的 header
        'content-type': 'application/json',
        appkey: config.appkey
      },
      success: res => {
        // 判断以2 (2xx) 开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理记录日志并showToaset一个统一的错误即可
        console.log('res==', res);
        let code = `${res.statusCode}`;
        if (code.startsWith('2')) { // I、请求成功情况
          params.success && params.success(res.data); // 执行success回调函数
        } else { // II、服务器异常情况
          const error_code = res.data.error_code;
          this._show_error(error_code)
        }
      },
      fail: err => { // III、api调用失败情况(断网可验证)
        console.log(err);
        this._show_error();
      }
    })
  }
  
  /* wechat 没有私有概念, 这里是一种写法 */
  _show_error(error_code = 1) {
    const tip = tips[error_code];
      // [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
    wx.showToast({
      title: tip || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export default new HTTP();
