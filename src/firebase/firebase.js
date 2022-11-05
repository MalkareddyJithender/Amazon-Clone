import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnd6AeFnH6f42itALLgZnq3uGBdCJylBg",
    authDomain: "clone-4f49b.firebaseapp.com",
    projectId: "clone-4f49b",
    storageBucket: "clone-4f49b.appspot.com",
    messagingSenderId: "849169760288",
    appId: "1:849169760288:web:ce1e4be0dca3373a70fc45",
    measurementId: "G-TH5PLCQR59"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //database
  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export { auth,db };


