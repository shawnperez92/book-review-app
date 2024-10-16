const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000; // Define the PORT variable

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET, // Ensure this is provided
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.get('/', (req, res) => {
  res.send('Welcome to the Book Review App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});