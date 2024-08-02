// import express, { json, static } from "express";
// const app = express();
// import { connect, model } from "mongoose";
// import cors from "cors";
// import multer, { diskStorage } from "multer";

// app.use(json());
// app.use(cors());
// app.use("/files", static("files"));

// // MongoDB connection
// const mongoUrl = "mongodb+srv://greatstack:33858627@cluster0.42f45sh.mongodb.net/test?retryWrites=true&w=majority";

// connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to database");
// }).catch((e) => console.log(e));

// // Multer configuration
// const storage = diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const PdfSchema = model("PdfDetails", require("./pdfDetails"));

// // Route to handle file upload
// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   const {
//     title,
//     abstract,
//     keywords,
//     researchArea,
//     message,
//     authorName,
//     authorDesignation,
//     authorOrganization,
//     authorEmail,
//     authorMobile
//   } = req.body;
  
//   const fileName = req.file ? req.file.filename : null;
  
//   try {
//     await PdfSchema.create({
//       title,
//       abstract,
//       keywords: keywords.split(',').map(keyword => keyword.trim()),
//       researchArea,
//       message,
//       author: {
//         name: authorName,
//         designation: authorDesignation,
//         organization: authorOrganization,
//         email: authorEmail,
//         mobile: authorMobile
//       },
//       pdf: fileName
//     });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// // Route to get files
// app.get("/get-files", async (req, res) => {
//   try {
//     const data = await PdfSchema.find({});
//     res.send({ status: "ok", data });
//   } catch (error) {
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// // Root route
// app.get("/", (req, res) => {
//   res.send("Success!!!!!!");
// });

// // Start server
// app.listen(5001, () => {
//   console.log("Server Started on port 5001");
// });

// import express, { json, Router as expressRouter } from "express";
// const app = express();
// import { connect, model } from "mongoose";
// import cors from "cors";
// import multer, { diskStorage } from "multer";

// app.use(json());
// app.use(cors());
// app.use("/files", express.static("files"));

// // MongoDB connection
// const mongoUrl = "mongodb+srv://greatstack:33858627@cluster0.42f45sh.mongodb.net/test?retryWrites=true&w=majority";

// connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to database");
// }).catch((e) => console.log(e));

// // Multer configuration
// const storage = diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const PdfSchema = model("PdfDetails", require("./pdfDetails"));

// // Route to handle file upload
// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   const {
//     title,
//     abstract,
//     keywords,
//     researchArea,
//     message,
//     authorName,
//     authorDesignation,
//     authorOrganization,
//     authorEmail,
//     authorMobile
//   } = req.body;
  
//   const fileName = req.file ? req.file.filename : null;
  
//   try {
//     await PdfSchema.create({
//       title,
//       abstract,
//       keywords: keywords.split(',').map(keyword => keyword.trim()),
//       researchArea,
//       message,
//       author: {
//         name: authorName,
//         designation: authorDesignation,
//         organization: authorOrganization,
//         email: authorEmail,
//         mobile: authorMobile
//       },
//       pdf: fileName
//     });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// // Route to get files
// app.get("/get-files", async (req, res) => {
//   try {
//     const data = await PdfSchema.find({});
//     res.send({ status: "ok", data });
//   } catch (error) {
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// // Root route
// app.get("/", (req, res) => {
//   res.send("Success!!!!!!");
// });

// // Start server
// app.listen(5001, () => {
//   console.log("Server Started on port 5001");
// });
// app.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");


const PdfDetails = require('./models/PdfDetails');
const PaperQueue = require('./models/PaperQueue');
const Volume = require('./models/Volume');
const Issue = require('./models/Issue');

app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoUrl = "mongodb+srv://greatstack:33858627@cluster0.42f45sh.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to database");
}).catch((e) => console.log(e));

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// const PdfDetails = require("./pdfDetails");
// const PaperCollection = require("./paperCollection");
// const pdfDetails = require("./pdfDetails");


// Route to handle file upload
app.post("/upload-files", upload.single("file"), async (req, res) => {
  // const {
  //   title,
  //   abstract,
  //   keywords,
  //   researchArea,
  //   message,
  //   authorName,
  //   authorDesignation,
  //   authorOrganization,
  //   authorEmail,
  //   authorMobile
  // } = req.body;
  const {
    title,
    abstract,
    keywords,
    researchArea,
    message,
    authorName,
    authorDesignation,
    authorOrganization,
    authorEmail,
    authorMobile
  } = req.body;
  
  const fileName = req.file ? req.file.filename : null;
  
  // try {
  //   // await PdfDetails.create({
  //   await PdfDetails.create({

  //     title,
  //     abstract,
  //     keywords: keywords.split(',').map(keyword => keyword.trim()),
  //     researchArea,
  //     message,
  //     author: {
  //       name: authorName,
  //       designation: authorDesignation,
  //       organization: authorOrganization,
  //       email: authorEmail,
  //       mobile: authorMobile
  //     },
  //     pdf: fileName
  //   });
  //   res.send({ status: "ok" });
  //   // res.redirect("/"); // Redirect to the home page

  // } catch (error) {
  //   res.status(500).json({ status: "error", message: error.message });
  // }
  try {
    // Save to Paper Queue with status "pending"
    await PaperQueue.create({
      title,
      abstract,
      keywords: keywords.split(',').map(keyword => keyword.trim()),
      researchArea,
      message,
      author: {
        name: authorName,
        designation: authorDesignation,
        organization: authorOrganization,
        email: authorEmail,
        mobile: authorMobile
      },
      pdf: fileName,
      status: "pending"
    });

    res.send({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});


// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const PdfDetails = require('./models/PdfDetails');
// const PaperQueue = require('./models/PaperQueue');

// const upload = multer({ dest: 'uploads/' });
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Upload Paper Endpoint
// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   const {
//     title,
//     abstract,
//     keywords,
//     researchArea,
//     message,
//     authorName,
//     authorDesignation,
//     authorOrganization,
//     authorEmail,
//     authorMobile
//   } = req.body;
  
//   const fileName = req.file ? req.file.filename : null;
  
//   try {
//     // Save to Paper Queue with status "pending"
//     await PaperQueue.create({
//       title,
//       abstract,
//       keywords: keywords.split(',').map(keyword => keyword.trim()),
//       researchArea,
//       message,
//       author: {
//         name: authorName,
//         designation: authorDesignation,
//         organization: authorOrganization,
//         email: authorEmail,
//         mobile: authorMobile
//       },
//       pdf: fileName,
//       status: "pending"
//     });

//     res.send({ status: "ok" });
//   } catch (error) {
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

// Example Mongoose Schema for PaperQueue
// const paperQueueSchema = new mongoose.Schema({
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
//   status: {
//     type: String,
//     enum: ['pending', 'approved'],
//     default: 'pending'
//   }
// });

// const PaperQueue = mongoose.model('PaperQueue', paperQueueSchema);


// Route to get files
app.get("/get-files", async (req, res) => {
  try {
    const data = await PdfDetails.find({});
    res.send({ status: "ok", data });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Success!!!!!!");
});

// Start server
app.listen(5001, () => {
  console.log("Server Started on port 5001");
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Admin Approval Endpoint
app.post("/approve-paper", async (req, res) => {
  const { paperId, volumeId, issueId } = req.body;

  try {
    const paper = await PaperQueue.findById(paperId);
    if (!paper) {
      return res.status(404).json({ status: "error", message: "Paper not found" });
    }

    await PdfDetails.create({
      title: paper.title,
      abstract: paper.abstract,
      keywords: paper.keywords,
      researchArea: paper.researchArea,
      message: paper.message,
      author: paper.author,
      pdf: paper.pdf,
      volumeId,
      issueId
    });

    paper.status = 'approved';
    await paper.save();

    res.send({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Fetch Volumes Endpoint
app.get("/volumes", async (req, res) => {
  try {
    const volumes = await Volume.find();
    res.json(volumes);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Fetch Issues for a Specific Volume Endpoint
app.get("/volumes/:volumeId/issues", async (req, res) => {
  const { volumeId } = req.params;

  try {
    const issues = await Issue.find({ volumeId });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Example Mongoose Schema for Volume
const volumeSchema = new mongoose.Schema({
  volumeNumber: Number,
  year: Number
});

const Volume = mongoose.model('Volume', volumeSchema);

// Example Mongoose Schema for Issue
const issueSchema = new mongoose.Schema({
  issueNumber: Number,
  volumeId: mongoose.Schema.Types.ObjectId,
  month: String
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = { Volume, Issue };

