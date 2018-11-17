/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require("lodash");
const { WebError } = requireRoot('lib/errors')

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function(req, res, next) {
	next();
};

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function(req, res, next) {
	if (!req.user) {
		req.flash("error", "Please sign in to access this page.");
		res.redirect("/keystone/signin");
	} else {
		next();
	}
};

exports.authenticate = scopes => {
	return function(req, res, next) {
		securityService
			.token({ token: req.headers.authorization })
			.then(token => {
				req.token = token;
				next();
			})
			.catch(e => {
				req.token = null;
				next();
			});
	};
};

// Forced to have 4 arguments due to express convension about error handlers
// eslint-disable-next-line
exports.errorHandler = function(err, req, res, next) {
	// eslint-disable-next-line
	const status = err instanceof WebError ? err.status : 500;
	res.status(status).send({ error: err });
};
