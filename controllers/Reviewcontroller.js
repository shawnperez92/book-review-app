const { Review } = require('../models');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.render('reviews', { reviews });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving reviews' });
  }
};

exports.addReview = async (req, res) => {
  const { bookId, userId, reviewText, rating } = req.body;
  try {
    const newReview = await Review.create({
      bookId,
      userId,
      reviewText,
      rating,
    });
    res.redirect('/reviews');
  } catch (error) {
    res.status(500).json({ error: 'Error saving review' });
  }
};
