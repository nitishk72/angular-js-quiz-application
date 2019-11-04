app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "src/pages/main.html"
        })
        .when("/profile", {
            templateUrl: "src/pages/profile.html"
        })
        .when("/about", {
            templateUrl: "src/pages/about.html",
            controller: "aboutController"
        })
        .when("/quiz", {
            templateUrl: "src/pages/quiz.html"
        })
        .when("/settings", {
            templateUrl: "src/pages/settings.html"
        })
        .when("/register", {
            templateUrl: "src/pages/register.html"
        })
        .when("/login", {
            templateUrl: "src/pages/login.html"
        })
        .when("/quiz/start", {
            templateUrl: "src/pages/start.html"
        })
        .otherwise({ redirectTo: '/' });
});

app.controller("aboutController", function ($scope, $http) {
    $scope.users = [];
    $http.get("./assets/json/about.json")
    .then(function(data){
        $scope.users = data.data;
    });
})