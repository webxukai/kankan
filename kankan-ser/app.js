/*
 * @Author: your name
 * @Date: 2019-12-26 15:03:22
 * @LastEditTime : 2019-12-27 14:05:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\kankan-ser\app.js
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/dist'))

// app.use(views(__dirname + '/views', {
//   extension: 'ejs'
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
