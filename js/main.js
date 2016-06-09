/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/resume", {templateUrl: "partials/resume.html", controller: "PageCtrl"})
    .when("/code", {templateUrl: "partials/code.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope/* $scope, $location, $http */) {

    // About Me Employer List
    $scope.employerList = [
    {company:'Upward.net',position:'Software Engineer',location:'7979 Gateway Blvd. Suite 110. Newark, California 94560',img:'http://placehold.it/500x300'},
    {company:'Postmob App',position:'Web Developer',location:'San Francisco, CA',img:'http://placehold.it/500x300'},
    {company:'MGM Mirage',position:'Poker Dealer',location:'Las Vegas, NV',img:'http://placehold.it/500x300'},
    {company:'Treasue Island',position:'Poker Dealer',location:'Las Vegas, NV',img:'http://placehold.it/500x300'},
    {company:'WSOP',position:'Poker Dealer',location:'Las Vegas, NV',img:'http://placehold.it/500x300'},
    {company:'Viprofix',position:'Data Entry Specialist',location:'Chicago, IL',img:'http://placehold.it/500x300'}
  ];

  // About - My  Skills List
    $scope.skillsList = [
    {name:'HTML',img:'http://placehold.it/500x300'},
    {name:'CSS',img:'http://placehold.it/500x300'},
    {name:'Bootstrap',img:'http://placehold.it/500x300'},
    {name:'JavaScript',img:'http://placehold.it/500x300'},
    {name:'jQuery',img:'http://placehold.it/500x300'},
    {name:'Apache Velocity',img:'http://placehold.it/500x300'},
    {name:'AngularJS',img:'http://placehold.it/500x300'}
    ];

  // Pyramid Function
  $scope.pyramid = function(number){
    number = $('#pyramidCols').val();
    $("#pyramidOutput").empty();
    for(var i = 0; i < number; i++)
    {
      for(var x = 0; x <= i; x++)
      {
        $("#pyramidOutput").append("*");
      }
      $("#pyramidOutput").append("</br>");
    }
  };

  $('#pyramidCols').keypress(function(event) {
    if (event.keyCode == 13) {
      $scope.pyramid();
    }
  });

  $scope.reset = function(){
    $('#pyramidCols').val('');
    $("#pyramidOutput").empty();
  }

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

