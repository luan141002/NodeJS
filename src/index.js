const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

const route = require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, '/public')));

// Database connection
db.connect();

// set up để tự động chuyển res.body thành json
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
// HTTP logger
app.use(morgan('combined'));

// Template engine - gán thư viện engine vào handle bả
app.engine('handlebars', handlebars.engine());
// set view engine là handlebars
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
