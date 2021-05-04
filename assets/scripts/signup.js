var firebaseConfig = {
    apiKey: "AIzaSyCrIWqNU2kdSahiutpp9m1uDJD7v8tRiaw",
    authDomain: "bankblood-101.firebaseapp.com",
    databaseURL: "https://bankblood-101-default-rtdb.firebaseio.com",
    projectId: "bankblood-101",
    storageBucket: "bankblood-101.appspot.com",
    messagingSenderId: "631408157440",
    appId: "1:631408157440:web:876eb7502be4e9836949e5",
    measurementId: "G-2M1V7VXR54",
};

   
firebase.initializeApp(firebaseConfig); 

let formMessage = firebase.database().ref("users");

document.getElementById('registrationform').addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    save()

    document.getElementById('registrationform').reset();
    
}

function sendMessage(userid, firstname, lastname, usremail, gender, dob, weight, blood, address, city, state, mobile, aadhar) {
    firebase
      .database()
      .ref("users/" + userid)
      .set({
        firstname: firstname,
        lastname: lastname,
        usremail: usremail,
        gender: gender,
        dob: dob,
        weight: weight,
        blood: blood,
        address: address,
        city: city,
        state: state,
        mobile: mobile,
        aadhar: aadhar,
      });
}

function save(){
    var pw = document.getElementById("usrpassword").value;
    var repw = document.getElementById("usrrepassword").value; 
    
    var fname = document.getElementById("usrfirstname").value;  
    var lname = document.getElementById("usrlastname").value;  
    var ema = document.getElementById("usremail").value;  
    var sex = document.getElementById("usrgender").value;  
    var dob = document.getElementById("usrdob").value;  
    var size = document.getElementById("usrweight").value;  
    var blood = document.getElementById("usrblood").value;  
    var addrs = document.getElementById("usraddress").value;  
    var cit = document.getElementById("usrcity").value;  
    var stat = document.getElementById("usrstate").value;  
    var mob = document.getElementById("usrmobno").value;  
    var aadh = document.getElementById("usraadhar").value;  
    //to check empty password field  
    if(pw == "") {  
        alert("no password has been entered");
        return false;  
    }  
    
    //minimum password length validation  
    if(pw.length < 7) {  
        alert("password is short");
        return false;  
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        alert("password is long");
       return false;  
    }
    
    //to check both password field are same or not 
    if(pw != repw) {
        alert("password not same");
    }
    else { 
        
        const email = document.querySelector('#usremail');
        const password = document.querySelector('#usrpassword');
        try {
            const result = firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            console.log(result)
            alert("You have successfully registered");
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var uid = user.uid
                    sendMessage(uid, fname, lname, ema, sex, dob, size, blood, addrs, cit, stat, mob, aadh);
                    window.location.href = "index.html";
                }
            });
        }
        catch(err) {
            alert("there is some error pls retry again");
        }
    }
    
}