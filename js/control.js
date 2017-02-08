var app = angular.module("myCtrlMod", []);
app.controller("loginCtrl", function($scope, $http, $cookies){
    var user_in = $cookies.get("user_info");
    
    $scope.user= {username: user_in};
    $scope.login = function(){
        
        $http.get("/data/admin.json").success(function(data){
            
            if(data.username == $scope.user.username && data.password == $scope.user.password){
                console.log("成功");
                $scope.error = false;
                if($scope.remember){
                    var date = new Date();
                    date.setDate(date.getDate() + 7);
                    $cookies.put("user_info", $scope.user.username, {expires: date})
                }else{
                    $cookies.remove("user_info");
                }
            }else{
                $scope.error = true;
            }
        })
    }
})