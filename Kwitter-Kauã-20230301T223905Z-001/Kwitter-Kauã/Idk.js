//LINKS DO SEU APP FIREBASE
const firebaseConfig = { apiKey: "AIzaSyCppIbk4u5SO8bIxv79wgBw854aPTlP04o",
 authDomain: "kwitter2-4232d.firebaseapp.com",
  projectId: "kwitter2-4232d",
   storageBucket: "kwitter2-4232d.appspot.com",
    messagingSenderId: "339432840317",
     appId: "1:339432840317:web:f486b3deeeb4a06189e514",
      measurementId: "G-YHFV9M98ZP" };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");


//Comece a programar aqui
 function send()
 { msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
     });
    document.getElementById("msg").value = "";
    };
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;