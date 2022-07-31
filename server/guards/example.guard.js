
/* Example Route Guard */
module.exports = exampleGuard = (req, res, next) => {

	// TODO: Do auth | permissions verification and validartion
	next();
	
}
