import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBOB5q7HI98B_rztI9ylRQyCIN9NEKZtrU",
  authDomain: "lucky-2-c15d7.firebaseapp.com",
  projectId: "lucky-2-c15d7",
  storageBucket: "lucky-2-c15d7.appspot.com",
  messagingSenderId: "475342401765",
  appId: "1:475342401765:web:cd45e9bce2872c02afa40c",
  measurementId: "G-6TQD2VK38F"
};

  const firebaseApp = !firebase.app ? firebase.app() : firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider };
  export default db;