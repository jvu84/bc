'use strict';

export default class newsfeedController {
	
  constructor($rootScope, api, datastore, $state, $uibModal) {
	  'ngInject';
	  
	   $rootScope.$on('messages_update', this.getMessages.bind(this) );
	  
	  this.api = api;
	  this.datastore = datastore;
	  this.$state = $state;
	  this.$uibModal = $uibModal;
	  
	  if( datastore.getUserId() == undefined ) {
		  $state.go('login');
		  return;
	  }
	  
	  this.data = {
		  messages: [],
		  newMessage: undefined
	  }
	  
    this.getMessages();
  }
  
  openUser( userId ) {
	  this.$state.go('userProfile', { userId: userId });
  }
  
  getMessages() {
	  
	  var userId = this.datastore.getUserId();
	  
	  var promise = this.api.getMessages( { userId });
	  
	  promise.then(responseJSON => {
			
			if( responseJSON.data.status != '200' ) {
				alert("Error");
				return;
			}
			
			 this.data.messages = responseJSON.data.data;
		});
	  
  }
  
  backButton() {
	  this.datastore.setUserId(undefined);
	  this.$state.go('login');
	  
  }
  
  newMessage() {
	  
	  var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'modalController as vm',
      size: 'md',
      windowClass: 'newsfeed-modal',
      resolve: {
	      
      }
    });
	 
	}  
}
