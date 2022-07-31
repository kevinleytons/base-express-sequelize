
const db = require('../config/db')


/* Get examples */
getExamples = async( req, res ) => {
	// To get DB tables use the "models" object property from instance of file '/server/config/db'
	const examples = await db.models.Example.findAll()

	res.status(201).json({
		ok: true,
		message: 'Get Examples Sucessfully!',
		examples
	});
}

/* Create new example register */
saveExample = async( req, res ) => {
	// To get DB tables use the "models" object property from instance of file '/server/config/db'
	const example = await db.models.Example.create({
		otherField: 'otherFieldData',
		anotherField: 0
	});

	res.status(201).json({
		ok: true,
		message: 'Example recorded Sucessfully!',
		example
	});
}

module.exports = {
	getExamples,
	saveExample
}