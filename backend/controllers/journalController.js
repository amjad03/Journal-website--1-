const Journal = require('../models/journalModel');

// Add Journal
const addJournal = async (req, res) => {
    const {
        title, abstract, keywords, researchArea, messageToEditor, authorDetails, reviewerReferralId, volume, issue
    } = req.body;

    const pdf = req.file ? req.file.path : null;

    const journal = new Journal({
        title, abstract, keywords, researchArea, pdf, messageToEditor, authorDetails, reviewerReferralId, volume, issue
    });

    try {
        const savedJournal = await journal.save();
        res.status(201).json(savedJournal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Journals by Category
const getJournalsByCategory = async (req, res) => {
    try {
        const journals = await Journal.find({ researchArea: req.params.category });
        res.status(200).json(journals);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Search Journals
const searchJournals = async (req, res) => {
    const { query } = req.query;
    try {
        const journals = await Journal.find({
            $text: { $search: query }
        });
        res.status(200).json(journals);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addJournal, getJournalsByCategory, searchJournals };
