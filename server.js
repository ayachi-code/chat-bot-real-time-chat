const express = require("express");
const app = express();

const port = 8080;

const server = app.listen(port,() => {
    console.log("Server word gehost op port " + port)
});