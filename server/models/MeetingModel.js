var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var SpeechModel = require('./SpeechModel');
var RoleModel = require('./RoleModel');

var MeetingSchema = new Schema({
    MeetingNumber: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Roles: [RoleModel],
    Speeches: [SpeechModel]
});

var MeetingModel = mongoose.model('Meeting', MeetingSchema);

module.exports = MeetingModel;