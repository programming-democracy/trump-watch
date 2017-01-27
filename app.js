var module = angular.module('TrumpActionsApp', ['ngMaterial']);
module.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').accentPalette('red');
});

var controller = function() {
  this.actions = data;
  this.actions.forEach((action) => action.open = false);
};

module.controller('TrumpActionsController', controller);
