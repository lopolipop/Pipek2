const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const session = require("express-session");
const config = require("./config");

// process.env.NODE_ENV = process.env.NODE_ENV || "development"
process.env.NODE_ENV = "development"

module.exports = function() {
	const app = express();
	// Set enviroment parameter
	if(process.env.NODE_ENV === "development") {
		app.use(morgan("dev"));
	}else {
		app.use(compression())
	}
	// Connect mongoose
	app.use(session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true
	}));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	// Set view enviroment
	app.set("views", ["./app/view", "./public"]);
	app.set("view engine", "jade");

	require("../app/route/index.server.route")(app);
	require("../app/route/partial.server.route")(app);

	app.use(sass({
		src: "./sass",
		dest: "./public/css",
		outputStyle: "compressed",
		prefix: "/css"
	}));
	// Set public folder
	app.use(express.static("./public"));
	return app;
};
