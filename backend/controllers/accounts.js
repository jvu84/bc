'use strict';
var async = require('async');

var database = require('./../datastore/database');

module.exports = {
	getAccount: getAccount,
	getUser: getUser
};

function getAccount( req, res ) {
	
	var email = req.query['email'];
	var password = req.query['password'];
	
	var responseJSON = {
		status: 400,
		statusCode: 'Error',
		data: {
			error: 'not found'
		}
	}
	
	var userId = database.validateLogin( email, password );
	
	if( userId != -1 ) {
		responseJSON = {
			status: 200,
			statusCode: 'OK',
			data: {
				userId: userId
			}
		}
	}
	
	res.send(responseJSON);
	
}

function getUser(req, res ) {
	
	var userId = req.params['id'];
	
	var responseJSON = {
		status: 400,
		statusCode: 'Error',
		data: {
			error: 'not found'
		}
	}
	
	var userData = database.getUsers(userId);
	
	if( userData != undefined ) {
		
		responseJSON = {
			status: 200,
			statusCode: 'OK',
			data: userData
		}
	}
	
	res.send(responseJSON);
	
}