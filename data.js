const firebaseConfig = {
    apiKey: "AIzaSyCMIg5Hu_nPTDvtaCUIgvgGWHcNGLxYNp4",
    authDomain: "login-aed51.firebaseapp.com",
    databaseURL: "https://login-aed51-default-rtdb.firebaseio.com",
    projectId: "login-aed51",
    storageBucket: "login-aed51.appspot.com",
    messagingSenderId: "738896348165",
    appId: "1:738896348165:web:899d7b71c88365e9b9886c",
    measurementId: "G-GL7M8W53FE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');



function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});

}

const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    //alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
