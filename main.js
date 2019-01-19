 // Initialize Firebase
var config = {
    apiKey: "AIzaSyCGfuEfihVh_aPEQM-IbekiVLu8-6aWv_8",
    authDomain: "spaceproject-63074.firebaseapp.com",
    databaseURL: "https://spaceproject-63074.firebaseio.com",
    projectId: "spaceproject-63074",
    storageBucket: "spaceproject-63074.appspot.com",
    messagingSenderId: "54774663094"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  // variables needed

  
  // on clikc event
$("#changME").on("click", function(event) {
    // alert is just for testing functionality 
    alert("You clicked me")

    event.preventDefault();
});

