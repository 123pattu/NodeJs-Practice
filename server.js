const express = require("express")
let app = new express();

app.get("/",function(req, res) {
    res.send("Hello, welcome to Wohlig Transforation Pvt Ltd.");
});

app.get("/about", function(req, res) {
    res.send("Wohlig simply want to halp you leverage through our expertise to make your business efficient, cutting-edge and have a low cost of ownership.");
});

app.get("/contact", function(req, res) {
    res.send("info@wohlig.com");
});

app.get("*", function(req, res) {
    res.send("ooops, You are lost");
});

let port = 12345;
app.listen(port, function() {
    console.log("server started listening at localhost:" + port);
});
