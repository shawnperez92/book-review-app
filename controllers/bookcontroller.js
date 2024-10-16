const axios = require('axios');
require('dotenv').config();

exports.searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    const response = await axios.get(apiUrl);
    const books = response.data.items;
    res.render('searchResults', { books });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Google Books API' });
  }
};
