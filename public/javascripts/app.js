var resolutionSystem = angular.module('resolutionSystem', ['ui.router']);
  
  resolutionSystem.controller('createCaseCtrl', function($scope, $http/*, createCaseFactory*/){
    $scope.createCase = function(scopeKase){
      console.log("button Klick");
      $http.post('/createCase', skopeKase);
      /*$http({method: 'POST', url: '/createCase'}).
        success(function(data, status, headers, config) {

        });*/
      //createCaseFactory.postCase(scopekase);
    };
  });

  resolutionSystem.controller('caseFeedCtrl', function($scope){

  });

  /*resolutionSystem.factory('createCaseFactory', function($http){
    return {
      postCase: function(kase){$http.post('/createCase', kase)}
    }
  });*/

  resolutionSystem.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/caseEntry");

    $stateProvider
      .state('caseEntry', {
        url: "/caseEntry",
        templateUrl: "/partials/caseEntry.html",
        controller: 'createCaseCtrl'
      })
      .state('caseFeed', {
        url: "/caseFeed",
        templateUrl: "/partials/caseFeed.html",
        controller: 'caseFeedCtrl'
      })
  });