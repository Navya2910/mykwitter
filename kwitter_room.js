
var firebaseConfig = {
      apiKey: "AIzaSyAFgJDZ4UDZ03GdEbuKGwERVE4SttphYDo",
      authDomain: "kwitter-8af92.firebaseapp.com",
      databaseURL: "https://kwitter-8af92-default-rtdb.firebaseio.com",
      projectId: "kwitter-8af92",
      storageBucket: "kwitter-8af92.appspot.com",
      messagingSenderId: "876167974982",
      appId: "1:876167974982:web:3360b2884cb185a90b7a47"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
      row="<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
    
      //End code
      });});}
getData();
 
function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}