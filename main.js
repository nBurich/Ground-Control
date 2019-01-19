
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

  //variables
  var name = "";
  var email = "";
  
  //on click
$("#submit").on("click", function (event) {
    
    alert("You are now Logged in.");
    console.log(alert);

    event.preventDefault();

    name = $("#uname").val().trim();
    email = $("uemail").val().trim();

    database.ref().push({
        name: name,
        email: email
    });

    console.log(database);

    //clear those fields
    $("#uname").val("");
    $("#uemail").val("");
});

