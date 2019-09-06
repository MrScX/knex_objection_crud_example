
const { Model } = require("objection");
const Role = require("./Role");


class User extends Model {

    static get tableName() {
        return "users";
    }

    static get relationMappings() {
        return {
            role: {
                relation: Model.BelongsToOneRelation,
                modelClass: Role,
                join: {
                    from: "users.role_id",
                    to: "roles.id"
                }
            }
        }
    }
}

module.exports = User;