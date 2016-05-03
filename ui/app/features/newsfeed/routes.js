routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('newsfeed', {
      url: '/newsfeed',
      template: require('./template.html'),
      controller: 'newsfeedController',
      controllerAs: 'vm'
    });
}