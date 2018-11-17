/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require("keystone");
var middlewareRouter = require("./lib/middleware");
const productsRouter = require("./lib/products");

const restful = require("restful-keystone")(keystone, {
	root: "/api/v1"
});

// Common Middleware
keystone.pre("routes", middlewareRouter.initLocals);

// Setup Route Bindings
exports = module.exports = function(app) {
	app.set("json spaces", 2);
	app.all("/api/v1/*", keystone.middleware.cors);

	app.options("/api/v1/*", (req, res) => {
		res.sendStatus(200);
	});

	app.use("/api/v1/products", productsRouter);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	app.get("/", (req, res) => {
		res.redirect("/keystone/");
	});

	restful.expose({}).start();
	app.use(middlewareRouter.errorHandler);
};
