const express = require("express")
const app = express()
app.get("/home", (request, response) => {
  //响应一个页面
  response.sendFile(__dirname + "/9_同源策略.html")
})

app.get("/data", (request, response) => {
  response.send("用户数据")
})

//监听
app.listen(9000, () => {
  console.log("服务启动成功...")
})