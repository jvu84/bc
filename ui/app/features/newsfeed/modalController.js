'use strict';

export default class modalController {
	
  constructor($rootScope, api, datastore, $state, $uibModalInstance) {
	  'ngInject';
	  
	  this.$rootScope = $rootScope;
	  this.api = api;
	  this.datastore = datastore;
	  this.$uibModalInstance = $uibModalInstance;
	  
	  this.data = {
		  newMessage: undefined
	  }
  }
  
	saveMessage() {
		
		var userId = this.datastore.getUserId();
		var message = this.data.newMessage;
		
		var promise = this.api.createMessages( { userId, message });
		
		promise.then(responseJSON => {
			
			if( responseJSON.data.status != '200' ) {
				alert("Error");
				return;
			}
			
			this.$rootScope.$broadcast('messages_update');
			this.closeModal();
		});
	}
	
	closeModal() {
		this.$uibModalInstance.dismiss('close');
	}
    
}
