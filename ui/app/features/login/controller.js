export default class loginController {
	
  constructor(api, datastore, $state) {
	  'ngInject';
	  
	  this.api = api;
	  this.datastore = datastore;
	  this.$state = $state;
	  
	  this.data = {
		  email: 'bob@gmail.com',
		  password: 'password'
	  }
    
  }
  
  submit() {
	  
	  var email = this.data.email;
	  var password = this.data.password;
	  
	  if( email == undefined || password == undefined ) {
		  alert("No email or password entered");
		  return;
	  }
	  
	  var promise = this.api.login( { email, password });
	  
	  promise.then(responseJSON => {
			
			if( responseJSON.data.status == '200' ) {
				this.datastore.setUserId( responseJSON.data.data.userId);
				this.$state.go('newsfeed' );
			} 
			else {
				alert("Incorrect email address or password");
			}  
		});
  }
    
}
