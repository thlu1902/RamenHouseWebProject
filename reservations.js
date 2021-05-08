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
  const detailsRef = dbRef.child('reservation_details');
  detailsRef.on("child_added", function(snapshot, prevChildKey) {
   var newPost = snapshot.val();
  });

function myFunction() {
    var product1 = document.getElementById("product1").value;
    if (product1 <= 0){ 
        alert("Please enter your name using letters only.")
        return}

    var product2 = document.getElementById("product2").value;
    if (product2 <= 0){ 
        alert("Please enter a value for the amount of people greater than 0.")
        return}

    var product3 = document.getElementById("product3").value;
    if (product3 <= 0){ 
        alert("Please enter a proper date.")
        return}

    var product4 = document.getElementById("product4").value;
    if (product4 <= 0){ 
        alert("Please enter a proper time.")
        return}

        var text = "The reservation for "+product1+" for "+product2+" people has been set on "+product3+" at "+product4+ ". Thank you for your reservation!";
    
        if(confirm("Press ok if your reservation information is correct.")){
            location.reload();

            alert(text)
}
    
    detailsRef.push().set({
    product1: product1,
    product2: product2,
    product3: product3,
    product4: product4,
    });
   }
    
