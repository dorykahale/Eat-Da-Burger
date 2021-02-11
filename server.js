var express = require('express');

var app = express();

var port = 8080;

app.use(express.json());

app.get("/home", function(req, res) {
    res.render("hello world");
})

app.listen(port, function() {
    console.log("Server running on port ", port);
});
