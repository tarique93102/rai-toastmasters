var express = require('express');
var meetingRouter = express.Router();
var Meeting = require('../models/MeetingModel');

meetingRouter.route('/single')
    .post((req, res, next) => {
        var NewMeeting = new Meeting(req.body);

        NewMeeting.save()
            .then((meeting) => {
                res.status(200).json({
                    message: `Meeting ${meeting.id} successfully created`
                });
             })
            .catch((err) => { throw err; });
    });

meetingRouter.route('/single/:id')
    .get((req, res, next) => {
        Meeting.findOne({id: req.params.id})
            .then((meeting) => {
                res.status(200).json({
                    success: true,
                    meeting
                });
            })
            .catch((err) => { throw err; });
    });

module.exports = meetingRouter;