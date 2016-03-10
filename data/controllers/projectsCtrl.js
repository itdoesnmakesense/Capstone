app.controller("projectsCtrl", 
  ["$scope", 
  function($scope) {

  	$scope.projectContent = [
  			{ 
  				Name: "uPick",
  				Skills: "AngularJS, Bootstrap, Google Maps API",
  				Description: "uPick, a mobile-friendly web application, is a solution for my personal struggle to pick a restaurant. With the implementation of geolocation, a number of local restaurants populate on the screen. With a click of a button, a restaurant of your choice is randomly choosen.",
  				Img: "data/img/uPickv1.jpg",
          link: "https://upick-88.firebaseapp.com/#/oh"
  			},
  			{
  				Name: "War",
  				Skills: "RequireJS, jQuery, Handlebars, Bootstrap, DeckOfCards API",
  				Description: "This project is based on the card game, War. Users compete with themselves. Begin with a full deck and flip cards until the decks are empty.",
  				Img: "data/img/war_game.jpg",
          link: "http://war.juanrod.co"
  			},
  			{
  				Name: "Weather",
  				Skills: "RequireJS, jQuery, Handlebars, Bootstrap, Open Weather Map API",
  				Description:"A simple weather app that retrieves data from openweathermap.org and populates specific data on the DOM based on user's current location.",
  				Img: "data/img/weather.jpg",
          link: "http://weather.juanrod.co"
  			},
        {
          Name: "uPick v2",
          Skills: "MongoDB, ExpressJS, AngularJS, Node.js, Bootstrap, Google Maps API, Google Places API",
          Description:"The second iteration of uPick. After geolocating user, local restaurant data is gathered from the API, sent to the Mongo database and populated on the DOM. The user can move around the map, drop another pin, and new data is retrieved, stored, and populated.",
          Img: "data/img/uPickv2.jpg",
          link: ""
        },
        {
          Name: "MultiVision",
          Skills: "MongoDB, ExpressJS, AngularJS, Node.js, Bootstrap, Stylus, Jade, Karma ",
          Description:"A simple website that implements authentication and authorization utilizing the MEAN Stack. A practice site for me to try my hand at angular testing, server and client side communication, utilizing Jade and Stylus templating, storing new users and the ability to edit information on the dom and pushing it into the database. ",
          Img: "data/img/multivison.jpg",
          link: "https://sleepy-island-45336.herokuapp.com/"
        },
  	];







  }]);