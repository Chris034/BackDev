let players = require("public/dummyDatabase");


// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/list", function (req, res) {
    try {
        res.status(200).json({
          data: players
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
    });

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));