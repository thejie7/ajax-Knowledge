// 引入 express
const express = require("express")
// 创建应用对象
const app = express()
// 创建路由规则
// request 是对请求报文的封装
// respones 是对响应报文的封装
app.get("/", (request, response) => {
  response.send("Hello Express")
})
// 监听端口启动服务
app.listen(8000, () => {
  console.log("服务已启动,8000端口监听中...")
})