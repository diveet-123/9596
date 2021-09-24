// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTvfJOkS3-8hLdI3X7RrUMihFeVu0Tke0",
  authDomain: "project-93-94-95-96-867a2.firebaseapp.com",
  databaseURL: "https://project-93-94-95-96-867a2-default-rtdb.firebaseio.com",
  projectId: "project-93-94-95-96-867a2",
  storageBucket: "project-93-94-95-96-867a2.appspot.com",
  messagingSenderId: "261213594823",
  appId: "1:261213594823:web:2d8e85a2bd212ab4520ae2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  name_user = localStorage.getItem("username");
    document.getElementById("name_of_user").innerHTML = "Welcome " + name_user + " !";

  function addroom()
  {
    user_name_typed = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name_typed).update({
        purpose:"adding room"
    });
    localStorage.setItem("room_name" , room_name);
          window.location = "School_page_chat.html";
  }

  function getdata()
  {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;

        console.log(" Room names -" + Room_names);
       row = "<div class='room_name' id = "+Room_names + " onclick = 'redirectToRoomName(this.id)' ># "+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML = row;
  });});}
  getdata();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
      window.location ="School_page_chat.html";
  }

  function logout()
  {
    localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }