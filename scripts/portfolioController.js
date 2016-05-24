(function(module) {
  var portfolioController = {};



  portfolioController.index = function() {
  if (projects.length == 0){
    Project.fetchAll(projectView.initIndexPage);
  };
    $('#Home').hide();
    $('#projects').show();
    $('#Contact').hide();

  };

  module.portfolioController = portfolioController;
})(window);
