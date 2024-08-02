const express = require('express');
const { addJournal, getJournalsByCategory, searchJournals } = require('../controllers/journalController');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/', upload.single('pdf'), addJournal);
router.get('/category/:category', getJournalsByCategory);
router.get('/search', searchJournals);

module.exports = router;
