
// create the module
var villaApp = angular.module('villaApp', ['ngRoute']);

// configure our routes
villaApp.config(function ($routeProvider, $locationProvider) {
    var home = {
        title: 'Home',
        headerImage: '/images/header/pool-overhead.jpg',
        menuIndex: 1,
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    };

    $routeProvider
        // route for the home page
        .when('/', home)
        .when('/index', home)
        .when('/index.html', home)

        .when('/villa-dulcinea', {
            title: 'Villa Dulcinea',
            headerImage: '/images/header/livingroom-2.jpg',
            menuIndex: 2,
            templateUrl: 'pages/villa.html',
            controller: 'mainController'
        })

        .when('/area', {
            title: 'Area',
            headerImage: '/images/header/outside-pool.jpg',
            menuIndex: 3,
            templateUrl: 'pages/area.html',
            controller: 'mainController'
        })

        .when('/photo-gallery', {
            title: 'Photo Gallery',
            headerImage: '/images/header/living-room.jpg',
            menuIndex: 4,
            templateUrl: 'pages/gallery.html',
            controller: 'galleryController'
        })

        .when('/testimonials', {
            title: 'Testimonials',
            headerImage: '/images/header/outside.jpg',
            menuIndex: 5,
            templateUrl: 'pages/testimonials.html',
            controller: 'mainController'
        })

        .when('/rent-now', {
            title: 'Contact',
            headerImage: '/images/header/dining-room.jpg',
            menuIndex: 6,
            templateUrl: 'pages/rent-now.html',
            controller: 'mainController'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('!');
});

// create the controller and inject Angular's $scope
villaApp.controller('mainController', function($scope){
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

villaApp.controller('galleryController', function ($scope) {
    $scope.message = 'VVelcome to the gallery page.';
    $scope.gallery = {
        exterior: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '09a',
            '10',
            '11',
            '12',
            '13',
            '14'],
        interior: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            //'10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24'],
        guestHouse: [
            '01',
            '02']
    };
});

villaApp.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.headerImage = current.$$route.headerImage;
        $rootScope.menuIndex = current.$$route.menuIndex;
    });
}]);