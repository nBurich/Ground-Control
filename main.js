
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

  var database = firebase.database();

  //variables
  
  
  //on click
$("#submit").on("click", function (event) {
    
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    console.log(name);
    console.log(email);
    

    database.ref().push({
        name: name,
        email: email
    });

    console.log(database);

    database.ref().on("value", function(snapshot){
        $("#name-input").text(snapshot.val().name);
        $("#email-input").text(snapshot.val().email);
      })

    //clear those fields
    $("#name-input").val("");
    $("#email-input").val("");
});

