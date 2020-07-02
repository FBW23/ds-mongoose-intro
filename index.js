const mongoose = require("mongoose")
const faker = require("faker")

// CREATE A SCHEMA (=> describes structure of a docment)
const UserSchema = new mongoose.Schema({
    name: String,
    isAdmin: Boolean
})

// ATTACH SCHEMA TO A COLLECTION IN MONGODB
const User = mongoose.model("User", UserSchema)

// CONNECT TO MONGODB
const connectOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect("mongodb://localhost/users_db", connectOptions)
.then(() => console.log("Connected to MongoDB"));


// create hardcoded
User.create({
    name: "Rob",
    isAdmin: true
})
.then(userCreated => console.log(userCreated))

// create three initial records in our database 
// we also call this "seeding" our database
for(let i=0; i<5; i++) {

    // create a new User document (=record) and store it in users collection
    User.create({
        name: faker.name.findName(), 
        isAdmin: faker.random.boolean()
    })
    .then(userCreated => { 
        console.log("User created:", userCreated)
    })

}