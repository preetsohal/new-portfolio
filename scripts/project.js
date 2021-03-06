var projects = [];

function Project(opts) {
    this.title = opts.title;
    this.category = opts.category;
    this.publishedOn = opts.publishedOn;
    this.projectGhPages = opts.projectGhPages;
    this.Icon = opts.Icon;
    this.projectSourceCode = opts.projectSourceCode;
}

Project.prototype.toHtml = function() {

    this.publishedDaysAgo = 'about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago';
    var $source = $('#render-projects').html();
    var template = Handlebars.compile($source);
    return template(this);
};
Project.fetchAll = function() {
                if (localStorage.data) {
                  Project.loadAll(JSON.parse(localStorage.data));
                  projectView.handleMainNav ();
}
else  {
     $.getJSON("data.json",function(data){
        console.log(data);
        Project.loadAll(data);
        localStorage.setItem ('data', JSON.stringify(data));
        // projectView.loadAll(data);
projectView.handleMainNav ();
      });


}
}
//sort projects by date published, newes first
Project.loadAll = function(allMyProjects) {
    allMyProjects.sort(function(a, b) {
        return (new Date(b.publishedOn) - new Date(a.publishedOn));
    });

    //iterate through the collection of all my projects (projectItems.js)
    //and create new Project instances, push them into projects[]
    allMyProjects.forEach(function(project) {
        projects.push(new Project(project));
    });

    //append each Project from the projects[] to the DOM
    projects.forEach(function(p) {
        $('#projects').append(p.toHtml());
    });
}
// $('.more').readmore({
//   speed: 75,
//   lessLink: '<a href="#">Read less</a>'
// });
// $('.more').readmore();
