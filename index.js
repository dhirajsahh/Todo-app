const express = require("express");
require("dotenv").config();
const Port = process.env.PORT || 4000;
const connectdb = require("./Config/connectdb");
const mainRouter = require("./Routes/index");
const app = express();
app.use(express.json());
app.use("/", mainRouter);
connectdb();
app.listen(Port, () => {
  console.log("App is listening in port ", Port);
});
