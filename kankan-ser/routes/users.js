/*
 * @Author: your name
 * @Date: 2019-12-26 15:03:22
 * @LastEditTime : 2019-12-27 15:37:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\kankan-ser\routes\users.js
 */
const router = require('koa-router')()
const services = require('../query')
const crypto = require('crypto') // 加密
const verify = require('../config/crypto');
const xss = require('xss');

router.prefix('/api/users') // 前缀

router.post('/login', async (ctx, next) => {
  const {
    userName,
    password
  } = ctx.request.body;
  let md5 = crypto.createHash('md5');
  let responeseData = {};
  if (!userName && !password) {
    responeseData = {
      code: 2,
      msg: '缺少账号或密码'
    }
    ctx.body = responeseData;
    return;
  }
  let querySql = `select * from userinfo where userName='${userName}';`
  const userVerify = await services.query(querySql);
  const verifyPass = md5.update(password).digest(verify);

  if (userVerify.length === 0) {
    responeseData = {
      code: 1,
      msg: '没有找到该账号，建议注册，亲！'
    }
  } else {
    if (userVerify[0].password == verifyPass) {
      responeseData = {
        code: 0,
        token: userName
      }
    } else {
      responeseData = {
        code: 1,
        msg: '密码不正确'
      }
    }
  }
  ctx.body = responeseData
})

router.post('/user/logout', async (ctx, next) => {
  const responeseData = {
    data: 'success',
    code: 0
  }
  ctx.body = responeseData;
})
module.exports = router