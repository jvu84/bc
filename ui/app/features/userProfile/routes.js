routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('userProfile', {
      url: '/userProfile',
      template: require('./template.html'),
      controller: 'userProfileController',
      controllerAs: 'vm'
    });
}