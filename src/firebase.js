import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyA05unX54GcWlEftTud-XhZu_E3zHEN5j0",
  authDomain: "lucky-7b8dc.firebaseapp.com",
  projectId: "lucky-7b8dc",
  storageBucket: "lucky-7b8dc.appspot.com",
  messagingSenderId: "480294613953",
  appId: "1:480294613953:web:3e45a3f59e64836695b540",
  measurementId: "G-RW1G1VBDW4"
};

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
//   };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider };
  export default db;