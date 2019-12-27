/*
 * @Author: your name
 * @Date: 2019-11-04 17:44:49
 * @LastEditTime : 2019-12-27 14:32:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\vue.config.js
 */
module.exports = {
  lintOnSave: false,
  devServer: { // 设置代理
    proxy: {
      '/api': { //本地 
        target: 'http://localhost:80/',
        // 如果要代理 websockets     
        ws: true,
        changeOrigin: true
      },
      '/test': { //测试
        target: 'xxx'
      },
      '/pre': { //预发布
        target: 'xxx'
      },
      '/pro': { //正式
        target: 'xxx'
      }
    }
  },
}