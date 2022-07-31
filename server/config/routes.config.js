

/*
	Array of objects with following structure
	[
		{
			routes: routes file from "/server/routes" directory
			path: path to expose the routes
		}
	]
*/

const API_PATHS = [
	{
		routes: require('../routes/example.route'), 
		path: '/api/example'
	}
]

module.exports = API_PATHS;