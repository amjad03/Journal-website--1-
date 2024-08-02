// // // import express, { static as expressStatic } from 'express';
// // // import { connect, connection } from 'mongoose';
// // // import multer, { diskStorage } from 'multer';
// // // import { json } from 'body-parser';
// // // import { join } from 'path';
// // // import { Journal } from './models/journal';

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // // Connect to MongoDB
// // // // mongoose.connect('mongodb://localhost:27017/journalPublication', {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // });
// // // connect('mongodb+srv://mohamadrazasheikh:journal_aitm@12345@cluster0.k0qkm13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //   });

// // // const db = connection;
// // // db.on('error', console.error.bind(console, 'connection error:'));
// // // db.once('open', () => {
// // //   console.log('Connected to MongoDB');
// // // });

// // // app.use(json());
// // // app.use('/uploads', expressStatic(join(__dirname, 'uploads')));

// // // // Set up multer for file uploads
// // // const storage = diskStorage({
// // //   destination: function (req, file, cb) {
// // //     cb(null, 'uploads/');
// // //   },
// // //   filename: function (req, file, cb) {
// // //     cb(null, `${Date.now()}-${file.originalname}`);
// // //   },
// // // });
// // // const upload = multer({ storage });

// // // // Routes
// // // app.post('/api/journals', upload.single('file'), async (req, res) => {
// // //   try {
// // //     const newJournal = new Journal({
// // //       ...req.body,
// // //       file: req.file ? req.file.path : null,
// // //     });
// // //     await newJournal.save();
// // //     res.status(201).send(newJournal);
// // //   } catch (error) {
// // //     res.status(400).send(error);
// // //   }
// // // });

// // // app.get('/api/journals', async (req, res) => {
// // //   try {
// // //     const journals = await Journal.find({});
// // //     res.status(200).send(journals);
// // //   } catch (error) {
// // //     res.status(400).send(error);
// // //   }
// // // });

// // // app.get('/api/journals/search', async (req, res) => {
// // //   const { keyword } = req.query;
// // //   try {
// // //     const journals = await Journal.find({
// // //       $or: [
// // //         { title: { $regex: keyword, $options: 'i' } },
// // //         { abstract: { $regex: keyword, $options: 'i' } },
// // //         { keywords: { $regex: keyword, $options: 'i' } },
// // //       ],
// // //     });
// // //     res.status(200).send(journals);
// // //   } catch (error) {
// // //     res.status(400).send(error);
// // //   }
// // // });

// // // app.get('/api/journals/:id', async (req, res) => {
// // //   try {
// // //     const journal = await Journal.findById(req.params.id);
// // //     if (!journal) {
// // //       return res.status(404).send();
// // //     }
// // //     res.status(200).send(journal);
// // //   } catch (error) {
// // //     res.status(400).send(error);
// // //   }
// // // });

// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });


// // // server.js
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');

// // const app = express();
// // const port = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // MongoDB connection
// // const uri = 'mongodb+srv://mohamadrazasheikh:journal_aitm@12345@cluster0.k0qkm13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string
// // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // const connection = mongoose.connection;
// // connection.once('open', () => {
// //   console.log('MongoDB database connection established successfully');
// // });

// // // Schema and Model
// // const paperSchema = new mongoose.Schema({
// //   title: String,
// //   abstract: String,
// //   keywords: String,
// //   researchArea: String,
// //   paperFile: String,
// //   messageToReviewer: String,
// //   author: {
// //     name: String,
// //     designation: String,
// //     organization: String,
// //     email: String,
// //     mobile: String,
// //   },
// // });

// // const Paper = mongoose.model('Paper', paperSchema);

// // // Routes
// // app.post('/submit-paper', (req, res) => {
// //   const newPaper = new Paper(req.body);
  
// //   newPaper.save()
// //     .then(() => res.json('Paper submitted successfully!'))
// //     .catch(err => res.status(400).json('Error: ' + err));
// // });

// // // Start server
// // app.listen(port, () => {
// //   console.log(`Server is running on port: ${port}`);
// // });








// // const express = require('express');
// // const multer = require('multer');
// // const admin = require('firebase-admin');
// // const serviceAccount = require('./serviceAccountKey.json'); // path to your Firebase service account key file

// // // Initialize Firebase
// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDzIBXytBT8ddjGzeXIBEYxohwiveCtXQY",
// //   authDomain: "research-website--aitm.firebaseapp.com",
// //   projectId: "research-website--aitm",
// //   storageBucket: "research-website--aitm.appspot.com",
// //   messagingSenderId: "688330208542",
// //   appId: "1:688330208542:web:99a48e5cd81d11429d450f",
// //   measurementId: "G-TE0HFDM0E2"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);



// // // const app = express();
// // const port = 5001;

// // // Initialize Firebase
// // // admin.initializeApp({
// // //   credential: admin.credential.cert(serviceAccount),
// // //   storageBucket: 'your-firebase-storage-bucket-url' // replace with your Firebase storage bucket URL
// // // });

// // const db = admin.firestore();
// // const bucket = admin.storage().bucket();

// // // Configure multer for file uploads
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });

// // // Route to handle form submission
// // app.post('/upload-files', upload.single('file'), async (req, res) => {
// //   try {
// //     const {
// //       title, 
// //       abstract, 
// //       keywords, 
// //       researchArea, 
// //       message,
// //       authorName, 
// //       authorDesignation, 
// //       authorOrganization,
// //       authorEmail, 
// //       authorMobile
// //     } = req.body;
// //     const file = req.file;

// //     // Upload file to Firebase Storage
// //     const blob = bucket.file(file.originalname);
// //     const blobStream = blob.createWriteStream({
// //       metadata: {
// //         contentType: file.mimetype
// //       }
// //     });

// //     blobStream.on('error', (err) => {
// //       res.status(500).json({ status: 'error', message: err.message });
// //     });

// //     blobStream.on('finish', async () => {
// //       const fileUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

// //       // Save data to Firestore
// //       await db.collection('papers').add({
// //         title, abstract, keywords, researchArea, message,
// //         author: {
// //           name: authorName,
// //           designation: authorDesignation,
// //           organization: authorOrganization,
// //           email: authorEmail,
// //           mobile: authorMobile
// //         },
// //         fileUrl,
// //         submittedAt: admin.firestore.FieldValue.serverTimestamp()
// //       });

// //       res.status(200).json({ status: 'ok', message: 'Paper submitted successfully!' });
// //     });

// //     blobStream.end(file.buffer);
// //   } catch (error) {
// //     res.status(500).json({ status: 'error', message: error.message });
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });



// import express from 'express';
// import multer, { memoryStorage } from 'multer';
// // import { initializeApp, credential as _credential, firestore, storage as _storage } from 'firebase-admin'; 
// // import serviceAccount from './serviceAccountKey.json'; // Path to your Firebase service account key file
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDzIBXytBT8ddjGzeXIBEYxohwiveCtXQY",
//   authDomain: "research-website--aitm.firebaseapp.com",
//   projectId: "research-website--aitm",
//   storageBucket: "research-website--aitm.appspot.com",
//   messagingSenderId: "688330208542",
//   appId: "1:688330208542:web:99a48e5cd81d11429d450f",
//   measurementId: "G-TE0HFDM0E2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const fbStorage = getStorage(app);

// export { db, fbStorage, analytics };




// // const app = express();
// const port = 5001;

// // // Initialize Firebase
// // initializeApp({
// //   credential: _credential.cert(serviceAccount),
// //   storageBucket: 'your-firebase-storage-bucket-url' // Replace with your Firebase storage bucket URL
// // });

// // const db = firestore();
// const bucket = fbStorage.app.options.storageBucket;

// // Configure multer for file uploads
// const storage = memoryStorage();
// const upload = multer({ storage: storage });

// // Route to handle form submission
// app.post('/upload-files', upload.single('file'), async (req, res) => {
//   try {
//     const {
//       title, abstract, keywords, researchArea, message,
//       authorName, authorDesignation, authorOrganization,
//       authorEmail, authorMobile
//     } = req.body;
//     const file = req.file;

//     // Upload file to Firebase Storage
//     const blob = bucket.file(file.originalname);
//     const blobStream = blob.createWriteStream({
//       metadata: {
//         contentType: file.mimetype
//       }
//     });

//     blobStream.on('error', (err) => {
//       res.status(500).json({ status: 'error', message: err.message });
//     });

//     blobStream.on('finish', async () => {
//       const fileUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

//       // Save data to Firestore
//       await db.collection('papers').add({
//         title, abstract, keywords, researchArea, message,
//         author: {
//           name: authorName,
//           designation: authorDesignation,
//           organization: authorOrganization,
//           email: authorEmail,
//           mobile: authorMobile
//         },
//         fileUrl,
//         submittedAt: firestore.FieldValue.serverTimestamp()
//       });

//       res.status(200).json({ status: 'ok', message: 'Paper submitted successfully!' });
//     });

//     blobStream.end(file.buffer);
//   } catch (error) {
//     res.status(500).json({ status: 'error', message: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
