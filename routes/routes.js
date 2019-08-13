var express = require('express')
var path = require('path');
var os = require('os');
var config = require('./../config');
var app = express();
require('dotenv').config();
// classes
const { debugLog, getLineNumber, log_event, log_object_parser, dbQueryMethod, logEvent, getEventLog, getEventLogByID, log_event_detailed, getNewLogs } = require('../backend/classes.js');
// methods
const { get_available_quiz_for_profile_id_MSSQL, get_completed_quiz_categorized_submissions, get_gradable_quiz_submit_id_by_profile_and_topic, get_gradable_quiz_session_by_id, get_table_complete, get_submit_id_from_graded_by, time_now_MSSQL, update_image_base64_MSSQL, get_testable_topics_by_profile_id, get_available_engagements_by_profile_id, get_all_categories_and_topics_by_engagement_id_and_profile_id, getEngagementByEngId, get_all_topics, get_all_engagemets_for_admin } = require('../backend/methods.js');
// get_User
const { get_User } = require('../backend/get_user.js');
// object_validation
const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, format_quiz_table2, format_quiz_table_orderby_question_sort, sort_answers_for_question } = require('../backend/object_validation.js');

let hostname = os.hostname();

function preload_block(res, email, topic_id, engagement_id) {
    let functionName = 'preload_block';
    let details ={
        email: email,
        topic_id: topic_id,
        engagement_id: engagement_id
    }
    return new Promise(function (resolve, reject) {
        if (typeof (engagement_id) == 'object') {
            engagement_id = engagement_id.engagement_id;
        }
        try {
            get_User(email, engagement_id).then(currentUser => {
                resolve(currentUser)
            })
        } catch (error) {
            // Every error thrown in the whole “awaitable” chain will end up here now.
            reject(error)
            throw error
        }
    }).catch(function (error) {
        // error_handler(error, res, getLineNumber())
        throw (error);
    })
}



//==================================
module.exports = function (app) {
    console.log("router is ready!")
    app.get('/api/test', (req, res, next) => {
        console.log("Backend works!")
        let functionName = '/api/test'
        let details = {
            test: true,
            two: 2
        }
        // log_event_detailed("TESTING", "TESTING ERROR", functionName, null, JSON.stringify(details))
        res.json(true)
    });
    
}