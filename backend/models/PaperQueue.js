const mongoose = require('mongoose');

const paperQueueSchema = new mongoose.Schema({
  title: String,
  abstract: String,
  keywords: [String],
  researchArea: String,
  message: String,
  author: {
    name: String,
    designation: String,
    organization: String,
    email: String,
    mobile: String
  },
  pdf: String,
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  }
});

const PaperQueue = mongoose.model('PaperQueue', paperQueueSchema);

module.exports = PaperQueue;
