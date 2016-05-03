'use strict';

import angular from 'angular';

export default angular.module('app.api', [ ])
	.service('api', function($http, $q ) {
		'ngInject';
		
			this.server = 'http://localhost:7000';
		
			this.apiCall = function( url, method, parameters = {} ) {
				
				var url = this.server + url + '?';	
				for( var key in parameters ) {
					if( parameters[key] != undefined ) {
						url += key + '=' + parameters[key] + '&';
					}
				}
				url = url.substr(0, url.length -1 );
				
				var deferred = $q.defer();
				
				$http({
					method: method,
					url: url
				})
				.then( function( responseJSON ) {
					
					deferred.resolve( responseJSON );
				}, function( response ) {	//error
					
					deferred.resolve({
							data: {
								statusCode: response.status,
								status: response.statusText,
								data: {
									error: response.data
								}
							}
						});
				});
				
				return deferred.promise;
			}
			
			this.login = function ( { email, password } ) {
				
				var parameters = { email, password };
				
				var promise = this.apiCall( '/account', 'GET', parameters );
				return promise;
			}
			
			this.getUser = function ( { userId } ) {
				
				var parameters = {};
				
				var promise = this.apiCall( '/user/' + userId, 'GET', parameters );
				return promise;
			}
			
			this.getMessages = function( { userId } ) {
				
				var parameters = {};
				
				var promise = this.apiCall( '/user/' + userId + '/messages', 'GET', parameters );
				return promise;
			}
			
			this.createMessages = function( { userId, message } ) {
				
				var parameters = {
					message: message
				};
				
				var promise = this.apiCall( '/user/' + userId + '/messages', 'POST', parameters );
				return promise;
			}
		
		}
	).name;