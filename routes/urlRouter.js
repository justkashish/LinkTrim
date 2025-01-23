const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics } = require('../controllers/url');
const ensureAuthenticated = require('../controllers/auth');
const router = express.Router();

router.post('/', ensureAuthenticated, handleGenerateNewShortURL);
router.get('/analytics/:shortId', ensureAuthenticated, handleGetAnalytics);

module.exports = router;