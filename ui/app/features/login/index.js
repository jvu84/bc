import './styles.less';

import angular from 'angular';
import controller from './controller';

export default angular.module('app.login', [])
  .config(function($stateProvider) {
	  'ngInject';
	  
	  $stateProvider
	    .state('login', {
	      url: '/',
	      template: require('./template.html'),
	      controller: 'loginController',
	      controllerAs: 'vm'
	    });
  })
  .controller('loginController', controller)
  .name;
  

  
  
  