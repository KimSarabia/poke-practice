'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($q, $http) {
    console.log('homeCtrl!');
});

app.controller('listCtrl', function($scope, $state, pokedex) {
console.log('pokedex:', pokedex);
$scope.pokedex = pokedex.data.pokemon_entries;
});

app.controller('detailCtrl', function(pokemon){
  console.log('detailCtrl');
  console.log('pokemon:', pokemon);
})
