var firebaseConfig = {
    apiKey: "AIzaSyCQHG-5mTHqRRzrpvVcW4z3R0g7ZEve2Ek",
    authDomain: "ramen-house-1e8aa.firebaseapp.com",
    databaseURL: "https://ramen-house-1e8aa-default-rtdb.firebaseio.com",
    projectId: "ramen-house-1e8aa",
    storageBucket: "ramen-house-1e8aa.appspot.com",
    messagingSenderId: "870648212810",
    appId: "1:870648212810:web:fdc394467802483e5125b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const dbRef = firebase.database().ref();
  const detailsRef = dbRef.child('support_details');
  detailsRef.on("child_added", function(snapshot, prevChildKey) {
   var newPost = snapshot.val();
  });

function supportpage() {
    var product5 = document.getElementById("product5").value;
    if (product5 <= 0){
        alert("Please enter your name using letters only.")
    return}

    var product6 = document.getElementById("product6").value;
    if (product6 <= 0){
        alert("Please enter your email.")
    return}

    var product7 = document.getElementById("product7").value;
    if (product7 <= 0){
        alert("Please enter your message subject.")
    return}

    var product8 = document.getElementById("product8").value;
    if (product8 <= 0){
        alert("Please enter your message for Ramen House.")
    return}

        var text = "The message by "+product5+" about "+product7+" will be replied to "+product6+" shortly. Thank you for sending a message!";
        
        if(confirm("Press ok if your message is correct.")){
            location.reload();
        
            alert(text)
}

    detailsRef.push().set({
        product5: product5,
        product6: product6,
        product7: product7,
        product8: product8,
    });
}