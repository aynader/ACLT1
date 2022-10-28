// External variables
const express = require("express");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI = 'mongodb+srv://aynader:a7afsh5a7a@cluster0.bxy75sy.mongodb.net/test' ;


//App variables
const app = express();
const port = process.env.PORT || "8000";
const user = require('./Models/User');
// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
/*
                                                    Start of your code
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

// #Routing to userController here
app.use( require('./Routes/userController'));


/*
                                                    End of your code
*/

