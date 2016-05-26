(function(module) {
  var githubController = {};

  githubController.index = function() {
      repos.requestRepos();
  };
    $('#github').show();
    $('#Home').hide();
    $('#projects').hide();
    $('#Contact').hide();
  

  module.githubController = githubController;
})(window);
