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


var userData = [
			{
	    		name: "Sasha Banks",
	    		photo: "https://pbs.twimg.com/profile_images/821747940784009216/jXgwJueL.jpg",
	    		scores: [ 5, 1, 5, 4, 1, 3, 5, 1, 1, 1 ]
			},{
	    		name: "Bayley",
	    		photo: "https://pbs.twimg.com/profile_images/803427287442092033/SMbqhEef.jpg",
	    		scores: [ 5, 5, 1, 1, 1, 5, 1, 5, 5, 5 ]
			},

]

app.get("/all-friends", function(req, res) 
	{
	res.json(userData)
});

app.get("/", function(req, res) {
	console.log(__dirname);
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.post("/api/friends", function(req, res) {
  res.send(req.body);
});

//https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e711d944-d619-4736-a8bd-1c41e603d52e
//18:00 focus os sequalize change home and survey looks

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});