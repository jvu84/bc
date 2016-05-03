routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      template: require('./template.html'),
      controller: 'loginController',
      controllerAs: 'vm'
    });
}