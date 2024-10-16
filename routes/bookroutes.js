const express = require('express');
const router = express.Router();
const axios = require('axios');
const bookcontroller = require('../controllers/bookcontroller.js');

router.get('/search', bookController.searchBooks);

router.get('/search', async (req, res) => {
  const { query } = req.query;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
  const response = await axios.get(apiUrl);
  res.render('searchResults', { books: response.data.items });
});

router.post('/reviews', async (req, res) => {
  // Add logic to post reviews to the database
});

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

module.exports = router;
