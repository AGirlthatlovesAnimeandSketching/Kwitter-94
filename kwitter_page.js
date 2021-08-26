var firebaseConfig = {
    apiKey: "AIzaSyBSNoLvNSwSJn372OvV1aFhyDnJG25CRrw",
    authDomain: "kwitter-123a6.firebaseapp.com",
    databaseURL: "https://kwitter-123a6-default-rtdb.firebaseio.com",
    projectId: "kwitter-123a6",
    storageBucket: "kwitter-123a6.appspot.com",
    messagingSenderId: "96650884624",
    appId: "1:96650884624:web:cde2d26be1959068a13c95",
    measurementId: "G-WMD9PWCPP9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("KwitUser");
  roomname = localStorage.getItem("KwitRoom");

  function Sent(){
       
    message = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name : username,
        msg : message,
        like : 0,
    });
    document.getElementById("msg").value = "";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    row =  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
