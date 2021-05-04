var firebaseConfig = {
    apiKey: "AIzaSyCrIWqNU2kdSahiutpp9m1uDJD7v8tRiaw",
    authDomain: "bankblood-101.firebaseapp.com",
    databaseURL: "https://bankblood-101-default-rtdb.firebaseio.com",
    projectId: "bankblood-101",
    storageBucket: "bankblood-101.appspot.com",
    messagingSenderId: "631408157440",
    appId: "1:631408157440:web:876eb7502be4e9836949e5",
    measurementId: "G-2M1V7VXR54",
};

firebase.initializeApp(firebaseConfig); 

var uid;

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        uid = user.uid;
        alert(uid);
    }
})