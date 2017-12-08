// Iniitial parameter
const port = "3000";

// Import module
const mongoose = require("./config/mongoose");
const express = require("./config/express");

const app = express();

// Core server
app.listen(port);
module.exports = app;
console.log("Server running at http://localhost:"+port);
console.log("Running on "+process.env.NODE_ENV);
