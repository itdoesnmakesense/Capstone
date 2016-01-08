app.controller("projectsCtrl", 
  ["$scope", 
  function($scope) {

  	$scope.projectContent = [
  			{ 
  				Name: "uPick",
  				Skills: "AngularJS, Bootstrap, Google Maps API",
  				Description: "uPick, a mobile-friendly web application, is a solution for my personal struggle to pick a restaurant. With the implementation of geolocation, a number of local restaurants populate on the screen. With a click of a button, a restaurant of your choice is randomly choosen.",
  				Img: "data/img/uPickMockup.png"
  			},
  			{
  				Name: "Music History",
  				Skills: "AngularJS, Material Design, Firebase",
  				Description: "An in-class, on-going assignment that put what we learned to practice. The overarching goal was to practice various ways to implement new languages, frameworks, and libraries for adding, editing, deleting, and storing data. From vanilla Javascript, jQuery, Requirejs, loDash, underscore, Handlebars, Firebase and Angularjs.",
  				Img: "data/img/bey2.jpg"
  			},
  			{
  				Name: "Faux Pinterest",
  				Skills: "Bootstrap, AngularJS, Firebase",
  				Description:"A two day group project to make a Pinterest clone with Angularjs. My main focus was user experience and design of the project.",
  				Img: "data/img/bey1.jpg"
  			}
  	];






  }]);