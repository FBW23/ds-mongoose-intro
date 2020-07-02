const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const dbName = "usersExercise";
const faker = require('faker');


const UserSchema = new Schema({
    name: String,
    isAdmin: Boolean,
  });

  const User = model("User", UserSchema);

  mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  });
  User.insertMany([{ name: "Julia", isAdmin:true },{name:"Robo", isAdmin:false}, {name:"Maria", isAdmin:true}]).then(user=>{console.log('User created', user)});
