const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.uri;
const connectdb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("database connected succesfully");
  } catch (error) {
    console.log("error during connecting the database is", error);
  }
};
module.exports = connectdb;
