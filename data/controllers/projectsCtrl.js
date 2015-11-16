app.controller("projectsCtrl", 
  ["$scope", 
  function($scope) {

  	$scope.projectContent = [
  			{ 
  				Name: "uPick",
  				Skills: "Made the whole damn thing myself!",
  				Description: "Mumblecore +1 helvetica scenester four dollar toast. Cray blog organic, cold-pressed migas brunch chambray leggings actually microdosing. Locavore raw denim slow-carb, keffiyeh flexitarian banh mi mlkshk ugh gentrify waistcoat cronut small batch helvetica DIY. Tofu kickstarter chillwave, pop-up keytar crucifix tacos iPhone shoreditch everyday carry williamsburg twee. Celiac bitters listicle kitsch, ethical scenester locavore helvetica aesthetic cold-pressed. Try-hard marfa whatever raw denim bespoke, franzen wolf authentic selvage. ",
  				Img: "data/img/uPickMockup.png"
  			},
  			{
  				Name: "Music History",
  				Skills: "Used Angular and Bootstrap!",
  				Description: "Mumblecore +1 helvetica scenester four dollar toast. Cray blog organic, cold-pressed migas brunch chambray leggings actually microdosing. Locavore raw denim slow-carb, keffiyeh flexitarian banh mi mlkshk ugh gentrify waistcoat cronut small batch helvetica DIY. Tofu kickstarter chillwave, pop-up keytar crucifix tacos iPhone shoreditch everyday carry williamsburg twee. Celiac bitters listicle kitsch, ethical scenester locavore helvetica aesthetic cold-pressed. Try-hard marfa whatever raw denim bespoke, franzen wolf authentic selvage.",
  				Img: "data/img/bey2.jpg"
  			},
  			{
  				Name: "Faux Pinterest",
  				Skills: "Worked on a team. My job was mainly visual.",
  				Description:"Mumblecore +1 helvetica scenester four dollar toast. Cray blog organic, cold-pressed migas brunch chambray leggings actually microdosing. Locavore raw denim slow-carb, keffiyeh flexitarian banh mi mlkshk ugh gentrify waistcoat cronut small batch helvetica DIY. Tofu kickstarter chillwave, pop-up keytar crucifix tacos iPhone shoreditch everyday carry williamsburg twee. Celiac bitters listicle kitsch, ethical scenester locavore helvetica aesthetic cold-pressed. Try-hard marfa whatever raw denim bespoke, franzen wolf authentic selvage. ",
  				Img: "data/img/bey1.jpg"
  			}
  	];

  
  var projectIndex = 0;

  $scope.currentProject = $scope.projectContent[projectIndex];

  $scope.nextProject = function() {
      projectIndex = projectIndex+1;
      this.currentProject = $scope.projectContent[projectIndex];
        
   };
  $scope.prevProject = function() {
     projectIndex = projectIndex-1;
     this.currentProject = $scope.projectContent[projectIndex];
   };





  }]);