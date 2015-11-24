app.controller("projectsCtrl", 
  ["$scope", 
  function($scope) {

  	$scope.projectContent = [
  			{ 
  				Name: "uPick",
  				Skills: "Angular, Bootstrap, Google Maps API, Google Places API",
  				Description: "uPick, a mobile-friendly web application, is a solution for my personal struggle to pick a restaurant. With the implementation of geolocation, a number of local restaurants populate on the screen. With a click of a button, a restaurant of your choice is randomly choosen.",
  				Img: "data/img/uPickMockup.png"
  			},
  			{
  				Name: "Music History",
  				Skills: "Angular, Material Design, Firebase",
  				Description: "An in-class, on-going assignment that put what we learned to practice. The overarching goal was to practice various ways to implement new languages, frameworks, and libraries for adding, editing, deleting, and storing data. From vanilla Javascript, jQuery, Requirejs, loDash, underscore, Handlebars, Firebase and Angularjs.",
  				Img: "data/img/bey2.jpg"
  			},
  			{
  				Name: "Faux Pinterest",
  				Skills: "Bootstrap, Angularjs, Firebase",
  				Description:"A two day group project to make a Pinterest clone with Angularjs. My main focus was user experience and design of the project.",
  				Img: "data/img/bey1.jpg"
  			}
  	];

  
  var projectIndex = 0;

  $scope.currentProject = $scope.projectContent[projectIndex];

  $scope.nextProject = function() {

      projectIndex = projectIndex+1;
      this.currentProject = $scope.projectContent[projectIndex];
      if(projectIndex > 2){
        projectIndex = -1;
      }
    console.log("click", projectIndex);    
   };
  $scope.prevProject = function() {
     projectIndex = projectIndex-1;
     this.currentProject = $scope.projectContent[projectIndex];
   };





  }]);