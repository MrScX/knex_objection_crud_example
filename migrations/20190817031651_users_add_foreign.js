
exports.up = function(knex) {
    return knex.schema.table("users", table => {
        table.foreign("role_id").references("roles.id");
    });
};

exports.down = function(knex) {
    return knex.schema.table("users", table => {
        table.dropForeign("role_id");
    });
};
