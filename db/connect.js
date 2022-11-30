const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://vaibhav:AtlasPassword@nodeexpressprojectsjohn.bxjbty5.mongodb.net/todo?retryWrites=true&w=majority";
//In the above connectionString - Changes made to default copied stuff ->
//<password> updated to -> AtlasPassword
//project name added between "mongodb.net/" & "?retryWrites" -> todo

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
//mongoose.connect(connectionString) is the main command. That other object is just to avoid deprecation warnings
//This command returns a promise

module.exports = connectDB;
