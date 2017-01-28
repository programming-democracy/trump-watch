var module = angular.module('TrumpActionsApp', ['ngMaterial']);
module.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').accentPalette('red');
});


var ShareController = function() {
  this.entries = data;
};
module.controller('ShareController', controller);

var controller = function($mdDialog) {
  this.actions = data;
  this.actions.forEach((action) => action.open = false);

  this.share = function(ev) {
    $mdDialog.show({
      controller: ShareController,
      controllerAs: 'dialogCtrl',
      templateUrl: 'share.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    });
  };

};

module.controller('TrumpActionsController', controller);
