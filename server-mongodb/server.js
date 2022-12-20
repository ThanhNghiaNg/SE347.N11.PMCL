const express = require("express");
const URI = require("./utils/global").URI;
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);

const cors = require("cors");
const server = express();

// Set store session in mongodb
const store = new MongoDBStore({
  uri: URI,
  collections: "sessions",
});
// Import Routes
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const authRoute = require("./routes/auth");
// const userRoute = require('./routes/user')
server.use(express.static("public"));
// accept json and text
server.use(express.json({ type: ["application/json", "text/plain"] }));
// use cors to communicate with different client port
server.use(
  cors({
    origin: true,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
server.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// Use routes
server.use("/admin", adminRoute);
server.use(authRoute);
server.use("/user", userRoute);
server.use(shopRoute);

mongoose.connect(URI).then((result) => {
  server.listen(5000);
});
