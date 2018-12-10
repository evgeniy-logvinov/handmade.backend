require('dotenv').config();

function getMongoUrl(ip, port, name, user, pass, authSource) {
	return 'mongodb://' + (user && pass ? (user + ':' + pass + '@') : '') + ip + ':' + port + '/' + name + '?' + (authSource ? 'authSource=' + authSource : '')
}

module.exports = {
	apps: [{
		name: 'handmade-backend',
		script: 'keystone.js',
		watch: true,
		env: {
			'PORT': process.env.PORT,
			'COOKIE_SECRET': '',
			'CLOUDINARY_URL': 'cloudinary://337649255861516:1OZayLaBCc_Vk6MB8if8Z-8JCxo@evgeniy-logvinov',
			'NODE_ENV': process.env.NODE_ENV || 'development',
			'AUTO_UPDATE': true,
			'MONGO_URI': getMongoUrl(process.env.MONGO_IP, process.env.MONGO_PORT, process.env.MONGO_NAME, process.env.MONGO_USER, process.env.MONGO_PASS, process.env.MONGO_AUTH_SOURCE)
		},
		env_production: {
			'PORT': process.env.PORT || 8001,
			'COOKIE_SECRET': process.env.COOKIE_SECRET,
			'CLOUDINARY_URL': process.env.CLOUDINARY_URL,
			'NODE_ENV': process.env.NODE_ENV || 'production',
			'AUTO_UPDATE': process.env.AUTO_UPDATE,
			'MONGO_URI': process.env.MONGO_URI
		}
	}]
}
