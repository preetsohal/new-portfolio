(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('#contact').show();
    $('#home').hide();
    $('#Portfolio').hide();
  };

  module.contactController = aboutController;
})(window);
