const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://vladislavho:qwerty12345@cluster0.8qmw9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const startMDB = async () => {
  try {
    const client = new MongoClient(url);
    client.connect((err) => {
      client.db().createCollection("users2");
      const users = client.db().collection("users2");
      users.insertOne({ name: "Vlad", password: "1231312" });
    });

    console.log("succes mdb ");
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};

module.exports = startMDB;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log(collection)
//   client.close();
// });
