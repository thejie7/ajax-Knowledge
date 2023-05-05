// 引入 express
const express = require("express")
// 创建应用对象
const app = express()
// 创建路由规则
// request 是对请求报文的封装
// respones 是对响应报文的封装
app.get("/server", (request, response) => {
  //设置响应头 允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  //设置响应体
  response.send("Hello Ajax")
})

app.post("/server", (request, response) => {
  //设置响应头 允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setHeader("Access-Control-Allow-Headers", '*')
  response.setHeader("Access-Control-Allow-Method", "*")
  //设置响应体
  response.send("Hello Ajax post")
})

app.post("/json-server", (request, response) => {
  //设置响应头 允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  //设置响应体
  const data = {
    name: "张三"
  }
  //配合第一种
  // response.send(JSON.stringify(data))
  //配合第二种
  response.send(data)
})

//延迟响应
app.get("/delay", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  //通过定时器模拟延迟请求
  setTimeout(() => {
    response.send("延迟响应")
  }, 3000)
})

app.all("/axios-server", (request, response) => {
  //设置响应头 允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setHeader("Access-Control-Allow-Headers", '*')
  //设置响应体
  const data = {
    name: "张三",
    age: 18
  }
  response.send(data)
})

app.all("/fetch-server", (request, response) => {
  //设置响应头 允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setHeader('Access-Control-Allow-Headers', '*')
  //设置响应体
  const data = {
    name: "张三",
    age: 18
  }
  response.send(data)
})

app.get("/jsonp-server", (request, response) => {
  const data = {
    name: "张三",
    age: 18
  }
  response.send(`headle(${JSON.stringify(data)})`)
})

app.get("/check-server", (request, response) => {
  const data = {
    exist: 1,
    username: "111",
    msg: "该用户名已存在"
  }
  response.send(`headle(${JSON.stringify(data)})`)
})
// 监听端口启动服务
app.listen(8000, () => {
  console.log("服务已启动,8000端口监听中...")
})