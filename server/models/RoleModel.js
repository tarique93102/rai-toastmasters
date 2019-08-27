var mongoose = requrie('mongoose');
var Schema = mongoose.Schema();

/*
    RoleSchema Status: ['tentative', 'confirmed', 'rejected', 'absent', 'present']
*/
var RoleSchema = new Schema({
    Meeting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meeting'
    },
    RoleTaker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Role: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        default: 'tentative'
    }
});

var RoleModel = mongoose.model('Role', RoleSchema);

module.exports = RoleModel;