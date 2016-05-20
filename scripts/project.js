var projects = [];

function Project(opts) {
    this.title = opts.title;
    this.category = opts.category;
    this.publishedOn = opts.publishedOn;
    this.projectGhPages = opts.projectGhPages;
    this.Icon = opts.Icon;
    this.projectSourceCode = opts.projectSourceCode;
}

//render projects to the html page
Project.prototype.toHtml = function() {

    this.publishedDaysAgo = 'about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago';
    var $source = $('#render-projects').html();
    var template = Handlebars.compile($source);
    // this.classList.add('projects-display');
    return template(this);
};
Project.fetchAll = function() {
  debugger;
        // $.getJSON("data.json", function(data) {
                if (false) {
// debugger;
}else  {

    $.getJSON("data.json",function(data){
        Project.loadAll(data);
        localStorage.data = data;
        // projectView.loadAll(data);

      });

        //sort projects by date published, newes first
        Project.loadAll = function(allMyProjects) {
            allMyProjects.sort(function(a, b) {
                return (new Date(b.publishedOn) - new Date(a.publishedOn));
            });
debugger;
            //iterate through the collection of all my projects (projectItems.js)
            //and create new Project instances, push them into projects[]
            allMyProjects.forEach(function(project) {
                projects.push(new Project(project));

  debugger;
          });

            //append each Project from the projects[] to the DOM
            projects.forEach(function(p) {
debugger;
                $('#projects').append(p.toHtml());
            });
}
}
}
Project.fetchAll();
