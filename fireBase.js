


var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDbUMLutanL1rFWujP_Q29znR3G3ul31ec",
  authDomain: "mora-deportes.firebaseapp.com",
  projectId: "mora-deportes",
  storageBucket: "mora-deportes.appspot.com",
  messagingSenderId: "227372802661",
  appId: "1:227372802661:web:bbca95747955aeb2b35c8c",
  measurementId: "G-YGR0HBG163"
  };
if(!hasInit){
    firebase.initializeApp(config);
    firebase.analytics();
}


