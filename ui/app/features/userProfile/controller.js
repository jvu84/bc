'use strict';

export default class userProfileController {
	
  constructor(api, datastore, $state, $stateParams) {
	  'ngInject';
	  
	  this.api = api;
	  this.datastore = datastore;
	  this.$state = $state;
	  
	  var userId = $stateParams.userId;
	  
	  if( datastore.getUserId() == undefined ) {
		  $state.go('login');
		  return;
	  }
	  
	  this.data = {
		  userId: userId,
		  email: undefined,
		  profile: undefined
	  }
	  
	  this.getUserProfile();
  }
  
  getUserProfile() {
	  
	  var userId = this.data.userId
	  
	  var promise = this.api.getUser( { userId });
	  
	  promise.then(responseJSON => {
			
			if( responseJSON.data.status != '200' ) {
				alert("Error");
				return;
			}
			
			var data = responseJSON.data.data;
			this.data.email = data.email;
			this.data.profile = data.profile;
		});
	  
  }
  
  backButton() {
	  this.$state.go('newsfeed');
	  
  }
   
}
