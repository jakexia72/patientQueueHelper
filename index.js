//load app server
const express = require('express');
const app = express();
const port = process.env.PORT ||  7123 ;
const ejs = require('ejs')
//const cors = require('cors');
const firebase = require('firebase/app');
const firestore = require("firebase/firestore");
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

var firebaseConfig = {
  apiKey: "AIzaSyB7IhY6ENIFHUjkaTVQ8UJua9MChQSlA28",
  authDomain: "patient-queue-89500.firebaseapp.com",
  databaseURL: "https://patient-queue-89500.firebaseio.com",
  projectId: "patient-queue-89500",
  storageBucket: "patient-queue-89500.appspot.com",
  messagingSenderId: "331684236394",
  appId: "1:331684236394:web:1b8d89f19453feaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

const path = __dirname;

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/views/index.html")
});

app.get('/waitingRooms/:roomId', (req, res) => {
  const roomId = req.params.roomId;
  console.log(roomId);
  db.collection("waiting-rooms").doc(roomId).get().then((snapshot) =>{
    //res.render(path + "/views/room", {test:"testetsetas " + snapshot.data().Description});
    res.send(snapshot.data().Description);
  });
});


app.listen(port, () => {
  console.log("server is up and listening on " + port);
});
