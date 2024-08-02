// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { db, storage, analytics };





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyDzIBXytBT8ddjGzeXIBEYxohwiveCtXQY",
//   authDomain: "research-website--aitm.firebaseapp.com",
//   projectId: "research-website--aitm",
//   storageBucket: "research-website--aitm.appspot.com",
//   messagingSenderId: "688330208542",
//   appId: "1:688330208542:web:99a48e5cd81d11429d450f",
//   measurementId: "G-TE0HFDM0E2"
  apiKey: "AIzaSyAUQn7lXlKvVg4TMKm7ZkHbSmwA953YwDg",
  authDomain: "research-website---aitm.firebaseapp.com",
  projectId: "research-website---aitm",
  storageBucket: "research-website---aitm.appspot.com",
  messagingSenderId: "1095342271007",
  appId: "1:1095342271007:web:c82e46aeb89c299de7832a",
  measurementId: "G-6BB2NBK6Q0"
};

// console.log("Initializing Firebase...");
// const app = initializeApp(firebaseConfig);
// console.log("Firebase initialized", app);
// const db = getFirestore(app);
// console.log("Firestore initialized", db);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore(app);

// const storage = getStorage(app);
// console.log("Storage initialized", storage);

// try {
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);
//     console.log("Firestore initialized successfully");
//   } catch (error) {
//     console.error("Error initializing Firestore: ", error);
//   }


// export { db, storage };

// Initialize Firebase


// let app, db, storage;

// try {
//   app = initializeApp(firebaseConfig);
//   console.log("Firebase app initialized successfully");
// } catch (error) {
//   console.error("Error initializing Firebase app: ", error);
// }

// if (app) {
//   try {
//     db = getFirestore(app);
//     console.log("Firestore initialized successfully", db);
//   } catch (error) {
//     console.error("Error initializing Firestore: ", error);
//   }

//   try {
//     storage = getStorage(app);
//     console.log("Storage initialized successfully", storage);
//   } catch (error) {
//     console.error("Error initializing Storage: ", error);
//   }
// }

// export { db, storage };

let app, db, storage;
// app = initializeApp(firebaseConfig);
// db = getFirestore(app);
// storage = getStorage(app);



try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase app:", error);
}

if (app) {
  try {
    db = getFirestore(app);
    console.log("Firestore initialized successfully", db);
  } catch (error) {
    console.error("Error initializing Firestore:", error);
    console.error("Firestore error stack:", error.stack); // Add stack trace for detailed info
  }

  try {
    storage = getStorage(app);
    console.log("Storage initialized successfully", storage);
  } catch (error) {
    console.error("Error initializing Storage:", error);
    console.error("Storage error stack:", error.stack); // Add stack trace for detailed info
  }
}

export { db, storage,};

