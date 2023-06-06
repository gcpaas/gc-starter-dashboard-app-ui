/*
 * @description:
 * @Author: wujian
 * @Date: 2022-11-04 13:47:55
 * @LastEditors: wujian
 * @LastEditTime: 2023-06-05 16:57:51
 */
// npm run serve 开发运行时需要修改该配置文件
window.ENV = 'development'
/**
 * 直接按照格式定义参数即可，避免重复 window.SITE_CONFIG[xxx]=yyy
 */
 var developmentConfig = {
  starter: {
    logo:{
      login:'/static/images/login/logo.png'
    }
  },
  baseUrl: 'http://localhost:8081/xxx'
}
// 必须的
window.SITE_CONFIG = configDeepMerge(window.SITE_CONFIG,developmentConfig)
