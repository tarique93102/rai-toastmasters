var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var SpeechModel = require('./SpeechModel');

var UserSchema = new Schema({
    FullName: {
        type: String,
        required: true
    },
    Club: {
        type: String,
        required: true
    },
    Executive: {
        type: Boolean
    },
    ExecutiveRole: {
        type: String
    },
    RolesTaken: [],
    Speeches: [SpeechModel],
    MemberSince: {
        type: Date,
        default: Date.now
    },
    Active: {
        type: Boolean,
        default: true,
        required: true
    }
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;