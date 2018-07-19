const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Declare Express App
const app = express();

// Define Port from package.json or 3000
const port = process.env.PORT || 3000;

// Debugging Options
app.use(morgan('tiny'));

// To use static files
app.use(express.static(path.join(__dirname, '/public')));

// Include static libraries from npm installs
app.use('/css', express.static(
  path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/bootstrap/dist/js'))
);
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/jquery/dist'))
);

// Where are the views to render
app.set('views', './src/views');

// Use Pug as template engine
app.set('view engine', 'ejs');

const nav = [
  { link: '/books', title: 'Books' },
  { link: '/authors', title: 'Authors' },
];

// ROUTES
const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'The Title',
    nav
  });
});

// Listens to the app in port 3000
app.listen(port, () => {
  debug(chalk.green(`Listening on port ${port}.`));
});
