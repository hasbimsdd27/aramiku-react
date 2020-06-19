// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD6n6SJ7Y5sU3eQpU1C1V2Ugvz6s7StM_8",
    authDomain: "aramiku-258609.firebaseapp.com",
    databaseURL: "https://aramiku-258609.firebaseio.com",
    projectId: "aramiku-258609",
    storageBucket: "aramiku-258609.appspot.com",
    messagingSenderId: "621313834030",
    appId: "1:621313834030:web:41788c126cd8be2a1133bf",
    measurementId: "G-NZRPZMEJXN"
  });
  
  var db = firebase.firestore();

    function tambah_anime(id){
        $.getJSON('https://api.jikan.moe/v3/anime/'+id, function(data) {
            //data is the JSON string
            var animeRef = db.collection("anime");
            animeRef.doc(''+id).set(data);
            console.log('Data Berhasil Ditambah');
        });   
    }


    //tambah_anime(19815);

    var docRef = db.collection("anime").doc("20");
/*
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    db.collection("anime")
    .orderBy('title')
    .startAfter(6547)
    .limit(2)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    */