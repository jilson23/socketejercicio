const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/hello", function (req, res) {
    res.status(200).send("Hello World!");
  });

app.use(express.static("public"));

server.listen(8080, function () {
    console.log("Servidor corriendo en http://localhost:8080");
  });