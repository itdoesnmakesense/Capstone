app.controller("sidebarCtrl", function($scope) {

   $scope.showBar = false;
  


    $scope.showLeft = function(showBar) {
        console.log("click");
       	if(showBar === false){
        	$scope.showBar = true;
   		}
   		else
   		{
   			$scope.showBar = false;
   		}
    };
});