const express = require('express');
const twitterController = require('../controllers/twitterController');

const router = express.Router();

router.get('/track/:hashtag', twitterController.trackHashtag);
router.post('/stop', twitterController.stopTrackingHashtag);

module.exports = router;