
module.exports = ( sequelize, DataTypes ) => {

	const Example = sequelize.define('Example', {
		// Model attributes are defined here
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		otherField: {
			type: DataTypes.STRING,
			allowNull: false
		},
		anotherField: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		// Other model options go here
		tableName: 'examples'  // DB table name
	});

	/* Associations */
	Example.associate = models => {

		/* Example.hasMany( models.<SomeModel> , {
			foreignKey: 'example_id'
		}); */

	}

	return Example;

}