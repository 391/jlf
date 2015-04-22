'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var programs = require('../../app/controllers/programs');

	// Programs Routes
	app.route('/programs')
		.get(programs.list)
		.post(users.requiresLogin, programs.create);

	app.route('/programs/:programId')
		.get(programs.read)
		.put(users.requiresLogin, programs.hasAuthorization, programs.update)
		.delete(users.requiresLogin, programs.hasAuthorization, programs.delete);

	// Finish by binding the Program middleware
	app.param('programId', programs.programByID);
};