(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('#Contact').show();
    $('#Home').hide();
    $('#projects').hide();
  };

  module.contactController = contactController;
})(window);
