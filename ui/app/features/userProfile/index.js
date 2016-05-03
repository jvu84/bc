import './styles.less';

import angular from 'angular';
import controller from './controller';

export default angular.module('app.userProfile', [])
  .config(function($stateProvider) {
	  'ngInject';
	  
	  $stateProvider
	    .state('userProfile', {
	      url: '/userProfile?userId',
	      template: require('./template.html'),
	      controller: 'userProfileController',
	      controllerAs: 'vm'
	    });
  })
  .controller('userProfileController', controller)
  .name;
  

  
  
  