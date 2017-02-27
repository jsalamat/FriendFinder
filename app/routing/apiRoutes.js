var friends = require("../data/friends");


module.exports = function(app) {
	
// API GET Requests-------------------------------

	app.get("/api/friends", function(req, res) 
		{
		res.json(userData)
	});

// ------------------------------------------------
// API POST Requests-------------------------------
	app.post("/api/friends", function(req, res) {
	  res.send(req.body);
	});
  
// ------------------------------------------------
// Empty out the arrays of data-------------------------------  	
  // 	app.post("/api/clear", function() {
    
  //   friends = [];

  //   console.log(friends);
  // });
};