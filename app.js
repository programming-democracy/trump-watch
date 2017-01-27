var module = angular.module('TrumpActionsApp', ['ngMaterial']);

var controller = function() {
  this.actions = data;
  this.actions.forEach((action) => action.open = false);
};

module.controller('TrumpActionsController', controller);
