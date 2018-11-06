// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();
require('./require.js')

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'handmade-backend',
	'brand': 'handmade-backend',
	'mongo': process.env.MONGO_URI,

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'signin logo': ['https://res.cloudinary.com/evgeniy-logvinov/image/upload/v1539775892/handmade.frontend/logo/logoHM.png', 
					200, 
					200], // relative to public directory

	'auto update': (process.env.AUTO_UPDATE === 'true'),
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('lib/models')

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('cors allow origin', true)

// Load your project's Routes
keystone.set('routes', requireRoot('lib/routes'))

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();
