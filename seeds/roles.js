
exports.seed = function (knex) {
	
	return knex("roles").del()
		.then(function() {
			
			return knex("roles").insert([
				{ role_name: "User" },
				{ role_name: "Admin" },
				{ role_name: "Staff" }
			]);
		});
};
