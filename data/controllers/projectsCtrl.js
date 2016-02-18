app.controller("projectsCtrl", 
  ["$scope", 
  function($scope) {

    $scope.projectContent = [
      {
        Title: "uPick",
        Skills: "AngularJS, Google Maps & Places API, Bootstrap",
        Description: "uPick, a mobile-friendly web application, is a solution for my personal struggle to pick a restaurant. With the implementation of geolocation, a number of local restaurants populate on the screen. With a click of a button, a restaurant of your choice is randomly choosen.",
        Img: "data/img/uPick2.png"
      },
       {
        Title: "Something about why",
        Skills: "more skills",
        Description: "explain how",
        Img: "data/img/uPick1.png"
      }

    ];

  	// $scope.projectContent = [
  	// 		{ 
  	// 			Name: "uPick",
  	// 			Skills: "AngularJS, Bootstrap, Google Maps API",
  	// 			Description: "uPick, a mobile-friendly web application, is a solution for my personal struggle to pick a restaurant. With the implementation of geolocation, a number of local restaurants populate on the screen. With a click of a button, a restaurant of your choice is randomly choosen.",
  	// 			Img: "data/img/uPick_gifs/uPick_homePage.gif"
  	// 		},
  	// 		{
  	// 			Name: "uPick_v2",
  	// 			Skills: "MongoDB, ExpressJS, AngularJS, NodeJS, Google Maps API",
  	// 			Description: "uPick version 2 using the MEAN Stack with API implementation.",
  	// 			Img: "data/img/uPick_gifs/uPick_second_Scroll.gif"
  	// 		},
  	// 		{
  	// 			Name: "uPick_v2: another look",
  	// 			// Skills: "Bootstrap, AngularJS, Firebase",
  	// 			// Description:"A two day group project to make a Pinterest clone with Angularjs. My main focus was user experience and design of the project.",
  	// 			Img: "data/img/uPick_gifs/uPick_move.gif"
  	// 		}
  	// ];






  }]);