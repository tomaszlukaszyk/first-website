function validateFullName() {
    var name = document.forms["contactForm"]["fullname"].value;
    var err = document.getElementById("nameErr");
    if (name == "") {
        err.innerHTML = "Name must be filled out";
        return false;
    } else if (!/^[A-Z][a-z]+[ ][A-Z][a-z]+$/.test(name)) {
        err.innerHTML = "Please enter name in valid form like 'John Doe'";
        return false;
    } else {
        err.innerHTML = "";
    }
    return true;
}

function validateEmail() {
    var email = document.forms["contactForm"]["email"].value;
    var err = document.getElementById("mailErr");
    if (email == "") {
        err.innerHTML = "Email must be filled out";
        return false;
    } else if (!/^[A-Z0-9._]+@[A-Z0-9]+\.[A-Z]{2,}$/i.test(email)) {
        err.innerHTML = "Please enter valid email adress";
        return false;
    } else {
        err.innerHTML = "";
    }
    return true;
}

function validateMessage() {
    var message = document.forms["contactForm"]["message"].value;
    var err = document.getElementById("messageErr");
    if (message == "") {
        err.innerHTML = "Message must be filled out";
        return false;
    } else {
        err.innerHTML = "";
    }
    return true;
}

function validateForm() {
    if (!validateFullName()) {
        return false;
    }
    if (!validateEmail()) {
        return false;
    }
    if (!validateMessage()) {
        return false;
    }
    alert("Thank you for your message.")
}