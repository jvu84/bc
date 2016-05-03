import './styles.less';

import angular from 'angular';
import controller from './controller';
import modalController from './modalController';

export default angular.module('app.newsfeed', [])
  .config(function($stateProvider) {
	  'ngInject';
	  
	  $stateProvider
	    .state('newsfeed', {
	      url: '/newsfeed',
	      template: require('./template.html'),
	      controller: 'newsfeedController',
	      controllerAs: 'vm'
	    });
  })
  .controller('newsfeedController', controller)
  .controller('modalController', modalController)
  .name;
  

  
  
  