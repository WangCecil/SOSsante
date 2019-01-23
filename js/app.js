var app = angular.module('sossante', []);

app.controller('ConnexionCtrl', function($scope){
    $scope.chargement=false;
    $scope.connect="Se connecter";
    function open(){
        console.log("connexion reussie");
        window.location='docteur.html';
    }
    $scope.connecter=function(){
        $scope.chargement=true;
        $scope.connect="Traitement en cours ";                                
        setTimeout($scope.connect="Connexion", 1000000);
        setTimeout(open(), 1000000);
    }
});