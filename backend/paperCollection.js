const mongoose = require('mongoose');
const { Schema } = mongoose;

const paperCollection = new Schema({
    title: { type: String, required: true },
    abstract: { type: String, required: true },
    keywords: { type: [String], required: true },
    researchArea: { type: String, required: true },
    message: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      designation: { type: String, required: true },
      organization: { type: String, required: true },
      email: { type: String, required: true },
      mobile: { type: String, required: true },
    },
    status: { type: String, required: true },
    pdf: { type: String, required: true }
  }, { timestamps: true });

module.exports = mongoose.model('PaperCollection', paperCollection);
// module.exports = mongoose.model('PdfDetails', pdfSchema);


