const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const exphbs = require('express-handlebars'); // Correctly import express-handlebars

const app = express();
const PORT = process.env.PORT || 3000; // Define the PORT variable

app.engine('handlebars', exphbs.engine({ // Use exphbs.engine instead of exphbs
  extname: '.handlebars',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET, // Ensure this is provided
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

//app.get('/', (req, res) => {
  //res.send('Welcome to the Book Review App!');
//});

// Home Page Route
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

// Reviews Page Route
app.get('/reviews', (req, res) => {
  // Fetch reviews from the database if needed
  res.render('reviews', { title: 'Reviews', reviews: [] }); // Pass reviews data
});

// Login Page Route
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Add Review Page Route
app.get('/add-review', (req, res) => {
  res.render('add-review', { title: 'Add Review' });
});

// 404 Page Route (optional)
app.get('*', (req, res) => {
  res.render('404', { title: 'Page Not Found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});