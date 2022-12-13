const express = require("express");
const URI = require('./utils/global').URI
const mongoose = require('mongoose')
const cors = require('cors')
const server = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
// const userRoute = require('./routes/user')
// accept json and text
server.use(express.json({ type: ["application/json", "text/plain"] }));
// use cors to communicate with different client port
server.use(cors());

server.use("/admin", adminRoute);
// server.use('/user', userRoute)
server.use(shopRoute);

mongoose.connect(URI).then((result)=>{
  server.listen(5000)
})
