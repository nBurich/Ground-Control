
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
    var favorite = $("#favorite-input").val().trim();
    console.log(name);
    console.log(email);
    console.log(favorite);
    

    database.ref().push({
        name: name,
        email: email,
        favorite: favorite,
    });

    console.log(database);



    //clear those fields
   
   
   
   
    $("#name-input").val("");
    $("#email-input").val("");
    $("#favorite-input").val("");
});

database.ref().on("child_added", function(snapshot){
    var sv = snapshot.val();
    var tr = `<tr>
    <td>${sv.name}</td>
    <td>${sv.favorite}</td>
</tr>`
$("#tableBody").append(tr);

});

