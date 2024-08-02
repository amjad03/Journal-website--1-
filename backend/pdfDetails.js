// // pdfDetails.js
// const mongoose = require("mongoose");

// const PdfSchema = new mongoose.Schema({
//   title: String,
//   abstract: String,
//   keywords: [String],
//   researchArea: String,
//   message: String,
//   author: {
//     name: String,
//     designation: String,
//     organization: String,
//     email: String,
//     mobile: String
//   },
//   pdf: String,
// });

// module.exports = mongoose.model("PdfDetails", PdfSchema);

// pdfDetails.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const pdfQueueCollectionSchema = new Schema({
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
  status: 'pending',
  pdf: { type: String, required: true }
}, { timestamps: true });

// const pdfSchema = new Schema({
//     title: { type: String, required: true },
//     abstract: { type: String, required: true },
//     keywords: { type: [String], required: true },
//     researchArea: { type: String, required: true },
//     message: { type: String, required: true },
//     author: {
//       name: { type: String, required: true },
//       designation: { type: String, required: true },
//       organization: { type: String, required: true },
//       email: { type: String, required: true },
//       mobile: { type: String, required: true },
//     },
//     status: 'pending',
//     pdf: { type: String, required: true }
//   }, { timestamps: true });

module.exports = mongoose.model('PdfQueueCollection', pdfQueueCollectionSchema);
// module.exports = mongoose.model('PdfDetails', pdfSchema);


