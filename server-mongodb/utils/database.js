const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://owwibookstore:owwibookstore@cluster0.o5luvip.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected MongoDB!");
      db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (db) {
    return db;
  }
  throw "No database found!";
};
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
