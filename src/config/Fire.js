import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoo-QmIU2pKcMk63tnC8VPUJUJlJRTNSE",
    authDomain: "slacker-news-54735.firebaseapp.com",
    databaseURL: "https://slacker-news-54735.firebaseio.com",
    projectId: "slacker-news-54735",
    storageBucket: "slacker-news-54735.appspot.com",
    messagingSenderId: "830716285288",
    appId: "1:830716285288:web:f48a01c2817042a43186dd",
    measurementId: "G-SSZN08JERR"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;