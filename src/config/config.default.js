const dotenv = require('dotenv')
// 可以安装dotenv, 读取根目录中的.env文件, 将配置写到process.env中
dotenv.config()
// console.log(process.env.APP_PORT);
// process代表这次执行的进程，env待变环境变量
module.exports = process.env
