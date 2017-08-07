const express = require("express");
const request = require("request");
const bodyparser = require("body-parser");

let app = express();
app.use(bodyparser.urlencoded({extened: true}));

let webhook = "WEBHOOK URL GOES HERE!";

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/webhook", function(req, res) {
  request({
    method: "POST",
    url: webhook,
    json: {
      "content": req.body.msg
    }
  });
});

app.listen(80, function() {
  console.log("Webhook Started!");
});
