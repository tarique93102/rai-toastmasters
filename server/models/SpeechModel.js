var mongoose = require('mongoose');
var Schema = mongoose.Schema();

/*
    Speech Status: ['tentative', 'passed', 'confirmed', 'rejected', 'failed']
    Project Details: Level: 0 (if the speech is not part of Pathways)
*/
var SpeechSchema = new Schema({
    Meeting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meeting'
    },
    Title: {
        type: String,
        required: true
    },
    Pathways: {
        type: Boolean,
        required: true
    },
    BookingTimestamp: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: String,
        default: 'tentative'
    },
    Delivered: {
        type: Boolean,
        default: false
    },
    SpeechMaker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ProjectDetails: {
        Level: {
            type: Number,
            default: 0
        },
        Name: {
            type: String,
            default: 'none'
        }
    }
});

var SpeechModel = mongoose.model('Speech', SpeechSchema);

module.exports = SpeechModel;