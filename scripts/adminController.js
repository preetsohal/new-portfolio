(function(module) {
  var adminController = {};

  adminController.index = function() {
    Project.fetchAll(projectView.initAdminPage);
    $('#home').show();
    $('#portfolioController').hide();
    $('#contact').hide();
  };

  module.adminController = adminController;
})(window);
