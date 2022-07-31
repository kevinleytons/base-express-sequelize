
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = () => {
	try {
		const connection = new Sequelize('<db_name>', '<user>', '<pass>', {
			host: 'localhost',
			dialect: 'postgres', // 'mysql' | 'postgres' | 'sqlite' 
			schema: ''
		})

		doAssociations( connection );

		return connection;
	} catch (error) {
		console.log(error);
		throw new Error('Error a la hora de iniciar la base de datos');
	}
}

/* 
	Función encargada de realziar asociaciones a las tablas en Base de Datos
*/
function doAssociations( connection ) {
	const MODELS_DIR = __dirname + '/../models/'
	fs.readdirSync( MODELS_DIR )
		.filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js') )
		.forEach(file => {
			console.log( { file } )
			require(path.join(MODELS_DIR, file))(connection, Sequelize.DataTypes);
		});

	Object.keys(connection.models).forEach(modelName => {
		if (connection.models[modelName].associate) {
			connection.models[modelName].associate(connection.models);
		}
	});
}

module.exports = sequelize();