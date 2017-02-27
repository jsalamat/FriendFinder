var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;



// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ===========================================
// ROUTER
// ===========================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);





app.get("/all-friends", function(req, res) 
	{
	res.json(userData)
});



app.post("/api/friends", function(req, res) {
  res.send(req.body);
});


// ===========================================
// LISTENER
// ===========================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});