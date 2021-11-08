import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAbC9dKNSAqorJseXNI3p9w6zXuMZYcqfw",
    authDomain: "pro-67-46823.firebaseapp.com",
    databaseURL: "https://pro-67-46823-default-rtdb.firebaseio.com",
    projectId: "pro-67-46823",
    storageBucket: "pro-67-46823.appspot.com",
    messagingSenderId: "238827131267",
    appId: "1:238827131267:web:ddfbe9bb922cc861f5e6b6"
 
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();