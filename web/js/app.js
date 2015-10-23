angular.module('DemoApp', ["ui.router"]).
        config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
                //
                // For any unmatched url, redirect to /state1
                $urlRouterProvider.otherwise("/person");

                $stateProvider
                        .state('person', {
                            title: "Home",
                            url: "/person",
                            templateUrl: "person.html",
                            controller: "UserController",
                        })
                        .state('person.details', {
                            title: "details",
                            url: "/person/:id",
                            templateUrl: "persondetail.html",
                            controller: "UserController"
                        });
            }]);

var users = [];
angular.module('DemoApp').controller("UserController", function ($http, $stateParams,$scope) {
    
    
    
    
    if (typeof($stateParams.id) != 'undefined'){
        $scope.user = $scope.users[$stateParams.id];
    }
    
    if (typeof($scope.users) == 'undefined') {
        $scope.users = [];
        $http.get("data/data.json").success(function (data) {
            $scope.users = data.users;
            $scope.user = $scope.users[0];
        });
    }
    else { //We used the cache property on the http request instead
        $scope.users = $scope.users;
    }
});
