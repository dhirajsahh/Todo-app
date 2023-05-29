const express = require("express");
const connectdb = require("./Config/connectdb");
const mainRouter = require("./Routes/index");
const app = express();
app.use(express.json());
app.use("/", mainRouter);
connectdb();
app.listen(4200, () => {
  console.log("App is listening in port 4200");
});
