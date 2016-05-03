'use strict';
var async = require('async');

var database = require('./../datastore/database');

module.exports = {
	getMessages: getMessages,
  createMessages: createMessages
};

function getMessages( req, res ) {
	
	var userId = req.params['id'];
	
	var responseJSON = {
		status: 400,
		statusCode: 'Error',
		data: {
			error: 'not found'
		}
	}
	
	var messages = database.getMessages();

	responseJSON = {
		status: 200,
		statusCode: 'OK',
		data: messages
	}

	res.send(responseJSON);
	
}

function createMessages( req, res ) {
	
	var userId = req.params['id'];
	var message = req.query['message'];
	
	var id = database.createMessages( userId, message );
	
	var responseJSON = {
		status: 200,
		statusCode: 'OK',
		data: {
			messageId: id
		}
	}
	
	console.log(responseJSON );

	res.send(responseJSON);
	
	
}