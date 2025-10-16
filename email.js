
function ValidateEmail(){
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailStatus = false;

    if (email === ""){
        emailError.textContent = "Email is Mandatory";
    }
    else{
        if(email.match(emailExp)){
            emailError.textContent = "";
            emailStatus = true;
        }
        else{
            emailError.textContent = "Email is not valid";
        }
    }
    if(emailStatus){
        alert("SignUp Successful");
        return true;
    }           
    else{
        return false;
    }
}

function clickValidate(){
    const username = document.getElementById("username").value;
    const nameError = document.getElementById("nameError");
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    let nameStatus = false;
    let passwordStatus = false;
    const alphaExp = /^[a-zA-Z]+$/;
    const passwordExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (username === ""){
        nameError.textContent = "Username is Mandatory";
    }
    else{
        if(username.match(alphaExp)){
            nameError.textContent = "";
            nameStatus = true;
        }
        else{
            nameError.textContent = "Username is not valid";
        }
    }
    if(password === ""){
        passwordError.textContent = "Password is Mandatory";
    }
    else{
        if(password.match(passwordExp)){
            passwordError.textContent = "";
            passwordStatus = true;
        }
        else{
            passwordError.textContent = "Password is not valid";
        }
    }

    if(nameStatus && passwordStatus){
        alert("Login Successful");
        return true;
    }           
    else{
        return false;
    }
}

function contact() {
    const firstname = document.getElementById("firstname").value.trim();
    const firstnameError = document.getElementById("firstnameError");
    const lastname = document.getElementById("lastname").value.trim();
    const lastnameError = document.getElementById("lastnameError");
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    const message = document.getElementById("message").value.trim();
    const messageError = document.getElementById("messageError");

    let firstnameStatus = false;
    let lastnameStatus = false;
    let emailStatus = false;
    let phoneStatus = false;
    let messageStatus = false;

    const alphaExp = /^[a-zA-Z]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneExp = /^[0-9]{10}$/;
    const messageExp = /^[a-zA-Z0-9\s.,!?]+$/;

    if (firstname === "") {
        firstnameError.textContent = "First Name is Mandatory";
    } else if (!alphaExp.test(firstname)) {
        firstnameError.textContent = "First Name is not valid";
    } else {
        firstnameError.textContent = "";
        firstnameStatus = true;
    }

    if (lastname === "") {
        lastnameError.textContent = "Last Name is Mandatory";
    } else if (!alphaExp.test(lastname)) {
        lastnameError.textContent = "Last Name is not valid";
    } else {
        lastnameError.textContent = "";
        lastnameStatus = true;
    }

    if (email === "") {
        emailError.textContent = "Email is Mandatory";
    } else if (!emailExp.test(email)) {
        emailError.textContent = "Email is not valid";
    } else {
        emailError.textContent = "";
        emailStatus = true;
    }

    if (phone === "") {
        phoneError.textContent = "Phone is Mandatory";
    } else if (!phoneExp.test(phone)) {
        phoneError.textContent = "Phone is not valid (must be 10 digits)";
    } else {
        phoneError.textContent = "";
        phoneStatus = true;
    }

    if (message === "") {
        messageError.textContent = "Message is Mandatory";
    } else if (!messageExp.test(message)) {
        messageError.textContent = "Message is not valid";
    } else {
        messageError.textContent = "";
        messageStatus = true;
    }

    if (firstnameStatus && lastnameStatus && emailStatus && phoneStatus && messageStatus) {
        alert("Form Submitted Successfully!");
        return true;
    } else {
        return false;
    }
}

function comment(){
    const review = document.getElementById("review").value.trim();
    const reviewError = document.getElementById("reviewError");
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    let reviewStatus = false;
    let nameStatus = false;
    let emailStatus = false;
    const alphaExp = /^[a-zA-Z\s]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    const reviewExp = /^[a-zA-Z0-9\s.,!?]+$/;  

    if (review === ""){
        reviewError.textContent = "comment is Mandatory";
    } 
    else{
        if (review.match(reviewExp)){
            reviewError.textContent = "";
            reviewStatus = true;
        }
        else{
            reviewError.textContent = "comment is not valid";
        }
    }
    if(name === ""){
        nameError.textContent = "Name is Mandatory";
    }
    else{
        if(name.match(alphaExp)){
            nameError.textContent = "";
            nameStatus = true;
        }
        else{
            nameError.textContent = "Name is not valid";
        }
    }
    if(email === ""){
        emailError.textContent = "Email is Mandatory";
    }
    else{
        if(email.match(emailExp)){
            emailError.textContent = "";
            emailStatus = true;
        }
        else{
            emailError.textContent = "Email is not valid";
        }   
    }
    
    if(reviewStatus && nameStatus && emailStatus){
        alert("Comment Posted Successfully!");
        return true;
    }
    else{
        return false;
    }
}