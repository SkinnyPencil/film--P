// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXOHnR7NIfIw-d05TAjQ_sO2-bmd_nuns",
    authDomain: "min-filmdatabase-e4707.firebaseapp.com",
    projectId: "min-filmdatabase-e4707",
    storageBucket: "min-filmdatabase-e4707.appspot.com",
    messagingSenderId: "526777064922",
    appId: "1:526777064922:web:5375acfe48a974c32bb4e3"
});

// Initialize Firebase

const db = firebaseApp.firestore();

function addMovie() {
    let title= document.getElementById("title").value;
    let year= document.getElementById("lname").value;
    let image= document.getElementById("image").value;
    let genre= document.getElementById("genre").value;
    // Legger til info i collection som heiter "movies"
    db.collection("movies").doc().set({
        title: title,
        year: year,
        image: image,
        genre: genre,
    })
}

function getMovies() {
    let messagesText = "";

    db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            messagesText += "<div class='movie'> ";
            messagesText += "<div> <img src='"+ doc.data().image +"'> </div>";
            messagesText += "<h2>" + doc.data().title + " (" + doc.data().year + ") </h2>";
            messagesText += "</div>";
        });
        document.getElementById("movies").innerHTML = messagesText;
    });
}
getMovies();