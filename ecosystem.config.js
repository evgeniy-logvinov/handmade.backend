const mongoName = 'handmade-backend'
const mongoUser = 'handmade'
const mongoPass = 'handmade1'
const mongoAuthSource = 'handmade-backend'

const mongoIp = 'ds137862.mlab.com'
const mongoPort = '37862'

function getMongoUrl(ip, port, name, user, pass, authSource) {
	console.log('test', 'mongodb://' + (user && pass ? (user + ':' + pass + '@') : '') + ip + ':' + port + '/' + name + '?' + (authSource ? 'authSource=' + authSource : ''))
	return 'mongodb://' + (user && pass ? (user + ':' + pass + '@') : '') + ip + ':' + port + '/' + name + '?' + (authSource ? 'authSource=' + authSource : '')
}

module.exports = {
	apps: [{
		name: 'handmade-backend',
		script: 'keystone.js',
		watch: true,
		env: {
			'PORT': 8088,
			'COOKIE_SECRET': 'dRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t',
			'NODE_ENV': 'development',
			'AUTO_UPDATE': true,
			'MONGO_URI': getMongoUrl(mongoIp, mongoPort, mongoName, mongoUser, mongoPass, mongoAuthSource)
		},
		env_production: {
			'PORT': 8001,
			'COOKIE_SECRET': 'dRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t',
			'NODE_ENV': 'production',
			'AUTO_UPDATE': true,
			'MONGO_URI': getMongoUrl(mongoIp, mongoPort, mongoName, mongoUser, mongoPass, mongoAuthSource)
		}
	}]
}
