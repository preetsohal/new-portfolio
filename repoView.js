(function(module) {
  var repoView = {};


  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    var template = Handlebars.compile($('#repo-template').html());
    return template(repo);
  };

  repoView.index = function() {
    ui();
    $('.about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
