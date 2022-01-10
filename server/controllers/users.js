const mongoose = require("mongoose");
const User = require("../modeles/users");

const db =
  "mongodb+srv://vladislavho:qwerty12345@cluster0.8qmw9.mongodb.net/users-db?retryWrites=true&w=majority";

class Users {
  addUsers(req, res) {
    const { user } = req.body;
    console.log(user)
    try{
      mongoose
      .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((res) => console.log("Ok mong"))
      .catch((e) => console.log("error", e));

    new User({ ...user })
      .save()
      .then((user) => res.send(user) )
      .catch((e) => console.log("_ERROR_", e));
    }catch(e){
      console.log(e)
    }


    // return res.status(200).json(user.payload)
  }
}

module.exports = new Users();
