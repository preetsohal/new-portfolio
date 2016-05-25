(function(module) {
  var adminController = {};

  adminController.index = function() {
      if (projects.length == 0){
    Project.fetchAll(projectView.initAdminPage);
  };
    $('#Home').show();
    $('#projects').hide();
    $('#Contact').hide();
  };

  module.adminController = adminController;
})(window);
