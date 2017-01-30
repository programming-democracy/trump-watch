var module = angular.module('TrumpActionsApp', ['ngMaterial']);
module.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').accentPalette('red');
});


var ShareController = function($mdDialog) {
  this.entries = data;
  this.cancel = function() {
    $mdDialog.cancel();
  };
};
module.controller('ShareController', ShareController);


var InfoController = function($mdDialog) {
  this.cancel = function() {
    $mdDialog.cancel();
  };  
};
module.controller('InfoController', InfoController);


var MainController = function($mdDialog) {
  this.actions = data;
  this.actions.forEach((action) => {
    action.open = false;

    var date = new Date(action.date);
    date.setDate(date.getDate() + 1); // TODO: TZ madness, fix later
    action.dateObj = date;
  });

  // TODO: scroll


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

  this.info = function(ev) {
    $mdDialog.show({
      controller: InfoController,
      controllerAs: 'infoCtrl',
      templateUrl: 'info.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    });
  };
};
module.controller('TrumpActionsController', MainController);
