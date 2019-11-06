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
            templateUrl: "src/pages/quiz.html",
            controller: "allQuizController"
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
        .when("/result", {
            templateUrl: "src/pages/result.html"
        })
        .when("/quiz/:quizID", {
            templateUrl: "src/pages/start.html",
            controller: "quizController"
        })
        .otherwise({ redirectTo: '/' });
});

app.controller("aboutController", function ($scope, $http) {
    $scope.users = [];
    $http.get("./assets/json/about.json")
        .then(function (data) {
            $scope.users = data.data;
        });
});

app.controller("allQuizController", function ($scope, $routeParams, $http) {
    $scope.allQuizResponse = [];
    $http.get(`./assets/json/quiz/quiz.json`)
        .then(function (data) {
            $scope.allQuizResponse = data.data;
        });
});

app.controller("quizController", ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $scope.questionResponse = [];
        $http.get(`./assets/json/quiz/${$routeParams.quizID}.json`)
            .then(function (data) {
                $scope.questionResponse = data.data;
            });
        $scope.validate = function (key, option, correct) {
            console.log({ key, option, correct })
        }
    }]
);
