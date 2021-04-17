async function signup(e) {
    e.preventDefault()
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        console.log(result)
        alert("You have successfully registered");
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                window.location.href = "index.html";
            }
        });
    }
    catch(err) {
        console.log(err)
        alert("there is some error pls retry again");
    }
}


                