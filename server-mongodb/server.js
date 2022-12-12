const express = require("express");
const mongoConnect = require('./utils/database').mongoConnect
const server = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
// const userRoute = require('./routes/user')

server.use("/admin", adminRoute);
// server.use('/user', userRoute)
server.use(shopRoute);

mongoConnect(()=>{
  server.listen(5000)
})
