'use strict';

import angular from 'angular';

export default angular.module('app.datastore', [ ])
	.service('datastore', function() {
		'ngInject';
		
			this.data = {
				userId: undefined,
				messages: []
			}
			
			this.getUserId = function() {
				return this.data.userId;
			}		
			
			this.setUserId = function( id ) {
				this.data.userId = id;
			}
			
			this.getMessages = function() {
				return this.data.messages;
			}
			
			this.setMessages = function( messages ) {
				this.data.messages = messages;
			}
		}
	).name;