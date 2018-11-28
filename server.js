const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const router = require('./controllers/controller.js');
app.use('/', router);

// Server is listening on...
app.listen(PORT, function () {
    console.log('Application is listening on PORT ' + PORT + '.');
});