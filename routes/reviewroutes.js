const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/Reviewcontroller');

router.get('/reviews', reviewController.getReviews);
router.post('/reviews', reviewController.addReview);

module.exports = router;
