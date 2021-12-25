const express = require("express");
const cors = require("cors");
const router = require("./router/router");
const startMDB = require('./mongo')
const mongoose = require('mongoose')
const User = require("./modeles/users")
const PORT = process.env.PORT || 5000;
const app = express();


// user
//   .save()
//   .then(res => console.log(res))
//   .catch(e => console.log('ERROR', e))

app.use(express.json());
app.use(cors({ origin: ["http://localhost:8080", "*"], credentials: true }));
app.use("/api", router)
app.use("/api", cors)
// startMDB()

app.listen(PORT, console.log(`Server started on port ${PORT}...`));
