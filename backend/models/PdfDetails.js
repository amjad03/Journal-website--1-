const mongoose = require('mongoose');

const pdfDetailsSchema = new mongoose.Schema({
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
  volumeId: mongoose.Schema.Types.ObjectId,
  issueId: mongoose.Schema.Types.ObjectId
});

const PdfDetails = mongoose.model('PdfDetails', pdfDetailsSchema);

module.exports = PdfDetails;
