const Router = require('koa-router')
const { register, login } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 登录
router.post('/login', login)
// 注册接口
router.post('/register', register)

module.exports = router