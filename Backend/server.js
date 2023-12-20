const mongoose = require("mongoose");
const app = require("./App");

const port = 1000; //declaring random port number//
const DatabaseUrl = "mongodb://localhost:27017/BlogApp"; // creating variable of your database link

//create database connection//
const DatabaseConnection = async () => {
  try {
    await mongoose.connect(DatabaseUrl);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
DatabaseConnection(); //rewrite function to used when app is in use

//make to used port number of your database //
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
