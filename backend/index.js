// // // backend/index.js
// // import express from 'express';
// // import { connect, Schema, model } from 'mongoose';
// // import multer, { diskStorage } from 'multer';
// // // import { json } from 'body-parser';
// // import bodyParser from 'body-parser';
// // const { json, urlencoded } = bodyParser;

// // import cors from 'cors';
// // import path from 'path';

// // const app = express();
// // app.use(cors());
// // app.use(json());

// // // connect('mongodb+srv://mohamadrazasheikh:journal_aitm@12345@cluster0.k0qkm13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// // connect('mongodb+srv://greatstack:33858627@cluster0.42f45sh.mongodb.net/Maktab-E-Raza', {

// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // });

// // const paperSchema = new Schema({
// //   title: String,
// //   abstract: String,
// //   keywords: String,
// //   researchArea: String,
// //   filePath: String,
// //   message: String,
// //   author: {
// //     name: String,
// //     designation: String,
// //     organization: String,
// //     email: String,
// //     mobile: String,
// //   },
// // });

// // const Paper = model('Paper', paperSchema);

// // const storage = diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/');
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, `${Date.now()}-${file.originalname}`);
// //   },
// // });

// // const upload = multer({ storage });

// // app.post('/submit-paper-page', upload.single('file'), async (req, res) => {
// //   const { title, abstract, keywords, researchArea, message, author } = req.body;
// //   const filePath = req.file.path;

// //   const paper = new Paper({
// //     title,
// //     abstract,
// //     keywords,
// //     researchArea,
// //     filePath,
// //     message,
// //     author: JSON.parse(author),
// //   });

// //   await paper.save();
// //   res.send('Paper submitted successfully!');
// // });

// // app.listen(5001, () => {
// //   console.log('Server started on port 5001');
// // });


// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());
// app.use("/files", express.static("files"));


// // MongoDB connection ----------------------------------------------
// const mongoUrl = "mongodb+srv://greatstack:33858627@cluster0.42f45sh.mongodb.net/test?retryWrites=true&w=majority";


// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true  // Added for compatibility with newer versions
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));


// // Multer ------------------------------------------------------------
// const multer = require("multer");

// // console.log("Multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// require("./pdfDetails");
// const PdfSchema = mongoose.model("PdfDetails");
// const upload = multer({ storage: storage });

// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });



// app.get("/get-files", async (req, res) => {
//   try {
//     PdfSchema.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// // APIs ----------------------------------------------------------------
// app.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });

// app.listen(5001, () => {
//   console.log("Server Started");
// });


// // import express from 'express';
// // import bodyParser from 'body-parser';
// // import multer from 'multer';
// // import path from 'path';
// // import { fileURLToPath } from 'url';
// // import mongoose from 'mongoose';
// // import fs from 'fs';

// // const { connect, connection, Schema, model } = mongoose;

// // const app = express();
// // const port = 5001;

// // // MongoDB Connection
// // connect('mongodb+srv://greatstack:33858627@cluster0.42f45sh.mongodb.net/Maktab-E-Raza', {
// //   // useNewUrlParser: true,
// //   // useUnifiedTopology: true,
// // });

// // const db = connection;
// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', () => {
// //   console.log('Connected to MongoDB');
// // });

// // // Middleware
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());

// // // Multer Storage Configuration
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, 'uploads/');
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
// //   },
// // });

// // const upload = multer({ storage: storage });

// // // Mongoose Schema and Model
// // const journalSchema = new Schema({
// //   title: String,
// //   abstract: String,
// //   keywords: String,
// //   researchArea: String,
// //   message: String,
// //   author: {
// //     name: String,
// //     designation: String,
// //     organization: String,
// //     email: String,
// //     mobile: String,
// //   },
// //   filePath: String,
// // });

// // const Journal = model('Journal', journalSchema);

// // // Routes
// // app.post('/submit-paper-page', upload.single('file'), (req, res) => {
// //   const { title, abstract, keywords, researchArea, message, author } = req.body;
// //   const filePath = req.file ? req.file.path : '';

// //   const newJournal = new Journal({
// //     title,
// //     abstract,
// //     keywords,
// //     researchArea,
// //     message,
// //     author,
// //     filePath,
// //   });

// //   newJournal.save((err, savedDocument) => {
// //     if (err) {
// //       console.error(err);
// //       return res.status(500).send('Error saving document');
// //     }
// //     res.status(200).send('Document submitted successfully');
// //   });
// // });

// // // Start Server
// // app.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}`);
// // });
