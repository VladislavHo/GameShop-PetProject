const express = require("express");
const cors = require("cors");
const router = require("./router/router");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:8000", "*"], credentials: true }));
app.use("/api", router)
app.use("/api", cors)


app.listen(PORT, console.log(`Server started on port ${PORT}...`));