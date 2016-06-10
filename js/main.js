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
    .when("/resume", {templateUrl: "partials/resume.html", controller: "PageCtrl"})
    .when("/code", {templateUrl: "partials/code.html", controller: "PageCtrl"})
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
    {name:'HTML',img:'imgs/html5.png'},
    {name:'CSS',img:'imgs/css3.png'},
    {name:'Bootstrap',img:'imgs/bootstrap-logo.png'},
    {name:'JavaScript',img:'imgs/js.png'},
    {name:'jQuery',img:'imgs/jquery-logo.jpg'},
    {name:'Apache Velocity',img:'imgs/apache.jpg'},
    {name:'AngularJS',img:'imgs/angular.jpg'}
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
  };

  //Factorial Function
  $scope.factorial = function()
  {
    var x = document.getElementById("factorialInput").value;
    document.getElementById("factorialOutput").innerHTML="The factorial of " + x + " is<br> " + fact(x);
  }

  function fact(x)
  {
    if (x==1 || x==0)
    {return 1;}
    else
    {return x*fact(x-1);}
  }

  $scope.reset2 = function(){
    $('#factorialInput').val('');
    $("#factorialOutput").empty();
  };

  $('#factorialInput').keypress(function(event) {
    if (event.keyCode == 13) {
      $scope.factorial();
    }
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

