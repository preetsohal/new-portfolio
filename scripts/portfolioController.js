(function(module) {
  var portfolioController = {};


  Project.createTable();

  portfolioController.index = function() {
    
    Project.fetchAll(projectView.initIndexPage);
    $('#home').hide();
    $('#portfolio').show();
    $('#contact').hide();

  };

  module.portfolioController = portfolioController;
})(window);
