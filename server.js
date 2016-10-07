var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var exphbs = require('express-handlebars');
var helpers = require('./config/helpers');

var app = express();


app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));


var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: helpers,   
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'views/partials/'
    ]
});

app.engine('handlebars', hbs.engine);
app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'handlebars');

//var routes = require('./controllers/cats_controller.js');
var dashboardRoutes = require('./controllers/dashboard_controller.js');
var userRoutes = require('./controllers/users_controller.js');
var projectRoutes = require('./controllers/projects_controller.js')

app.use('/', dashboardRoutes);
app.use('/', userRoutes);
app.use('/', projectRoutes);

var port = 3000;
app.listen(port);
