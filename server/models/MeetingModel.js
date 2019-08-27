var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var SpeechModel = require('./SpeechModel');

var MeetingSchema = new Schema({
    MeetingNumber: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Roles: [],
    Speeches: [SpeechModel]
});

var MeetingModel = mongoose.model('Meeting', MeetingSchema);

module.exports = MeetingModel;