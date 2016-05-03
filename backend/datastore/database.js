'use strict';

module.exports = {
	validateLogin: validateLogin,
	getMessages: getMessages,
  createMessages: createMessages,
  getUsers: getUsers
};

function validateLogin( email, password ) {
	
	var id = emailHash[ email ];
	
	if( id == undefined ) {
		return -1;
	}
	else if( userHash[id].password == password ) {
		return id;
	}
	else {
		return -1;
	}
	
}

function getMessages() {
	
	var returnValue = [];
	
	for( var i=0; i < messages.length; i++ ) {
		returnValue.push({
			id: messages[i].id,
			userId: messages[i].userId,
			email: userHash[ messages[i].userId ].email, 
			read: messages[i].userId,
			message: messages[i].message
		})
	}
	
	return returnValue;
}

function createMessages( userId, message ) {
	
	var id = messages.length;
	
	messages.push({
		id: id,
		userId: userId,
		read: false,
		message: message
	});
	
	return id;
}

function getUsers( userId ) {
	
	return userHash[userId];
	
}

var userCounter = 4;

var emailHash = {
	'bob@gmail.com': 1,
	'carol@gmail.com': 2,
	'dave@gmail.com': 3
}

var userHash = {
	1: { 
		email: 'bob@gmail.com',
		profile: 'Big WWF fan',
		password: 'password'
	},
	2: {
		email: 'carol@gmail.com',
		profile: 'More Breaking Bad',
		password: 'password'
	},
	3: {
		email: 'dave@gmail.com',
		profile: 'Less Breaking Bad',
		password: 'password'
	},

}

var users = [
	{
		id: 1,
		email: 'bob@gmail.com',
		profile: 'Big WWF fan',
		password: 'password'
	},
	{
		id: 2,
		email: 'carol@gmail.com',
		profile: 'More Breaking Bad',
		password: 'password'
	},
	{
		id: 3,
		email: 'dave@gmail.com',
		profile: 'Less Breaking Bad',
		password: 'password'
	},
	
	
]

var messages = [
	{
		id: 1,
		userId: 1,
		read: false,
		message: 'Hey, what is the best thing to do on a Saturday night?'
	},
	{
		id: 2,
		userId: 2,
		read: true,
		message: 'who wants to meet for drinks?'
	},
	{
		id: 3,
		userId: 3,
		read: true,
		message: 'This is my last night?'
	},
	{
		id: 4,
		userId: 1,
		read: false,
		message: 'Hey, what is the best thing to do on a Saturday night longer message sdjfalkj aldkfjaldf jasdlfjadlfja;dflajd;f?'
	},
	{
		id: 5,
		userId: 1,
		read: false,
		message: 'Hey, what is the best thing to do on a Saturday night?'
	},
	{
		id: 6,
		userId: 1,
		read: false,
		message: 'Hey, what is the best thing to do on a Saturday night?'
	},
	{
		id: 7,
		userId: 1,
		read: false,
		message: 'Hey, what is the best thing to do on a Saturday night?'
	},
	{
		id: 8,
		userId: 1,
		read: false,
		message: 'Hey, what is the best thing to do on a Saturday night?'
	}
];