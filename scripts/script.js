"use strict";

const VALIDATE_PATTERNS = { fullName : /^[A-Z][a-z]+[ ][A-Z][a-z]+$/,
    email : /^[A-Z0-9._]+@[A-Z0-9]+\.[A-Z]{2,}$/i, 
    message : /[\w\d]+\s*/};

const ERROR_MESSAGES = {fullName : "Please enter name in valid form like 'John Doe'",
    email : "Please enter valid email adress",
    message : "Message must be filled out"};

const ERROR_LOCATIONS = {fullName: "nameErr", email: "mailErr", message: "messageErr"};

let contactForm = document.forms.contactForm;
let fullName = contactForm.fullName;
let email = contactForm.email;
let message = contactForm.message;

contactForm.addEventListener("submit", submitHandler);

fullName.addEventListener("blur", blurHandler);
fullName.addEventListener("focus", focusHandler);

email.addEventListener("blur", blurHandler);
email.addEventListener("focus", focusHandler);

message.addEventListener("blur", blurHandler);
message.addEventListener("focus", focusHandler);

function submitHandler(event) {
    event.preventDefault();

    let inputs = event.target.elements;
    dispatchBlurEventsForAllFormFields(inputs);

    if (allInputsValid(inputs)) {
        contactForm.reset();
        alert("Message has been sent!");
    }
}

function blurHandler(event) {
    let target = event.target;

    if (!isInputValid(target)) {
        let locationId = ERROR_LOCATIONS[target.name];
        let errorMessage = ERROR_MESSAGES[target.name];
        displayErrorMessage(locationId, errorMessage);
    }
}

function focusHandler(event) {
    let locationId = ERROR_LOCATIONS[event.target.name];
    displayErrorMessage(locationId, "");
}

function isInputValid(target) {
    return VALIDATE_PATTERNS[target.name].test(target.value);
}

function displayErrorMessage(locationId, errorMessage) {
    let errorLocation = document.getElementById(locationId);
    errorLocation.innerHTML = errorMessage;
}

function dispatchBlurEventsForAllFormFields(inputs) {
    let newEvent = new Event("blur");

    for (let i=0; i<inputs.length; i++) {
        inputs[i].dispatchEvent(newEvent);
    }
}

function allInputsValid(inputs) {
    for (let i=0; i<inputs.length; i++) {

        if (inputs[i].name === "") {
            continue;
        }

        if (!isInputValid(inputs[i])) {
            return false;
        }
    }
    return true;
}