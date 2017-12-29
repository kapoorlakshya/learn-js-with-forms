// Class to store user information
function User(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

// Validate form fields are not blank
function validateFields() {
    let fName = document.getElementById("first-name");
    let lName = document.getElementById("last-name");
    let email = document.getElementById("email-id");
    let lNameValidationMsgField = document.getElementById("lname-validation-msg");
    let fNameValidationMsgField = document.getElementById("fname-validation-msg");
    let emailValidationMsgField = document.getElementById("email-validation-msg");
    let canSubmit = true; // All validations passed?

    // Make sure Name and Email fields are not blank
    // Note: Checking String length is faster than comparing with "" because the interpreter
    // does not need to create a String object for ""
    // https://stackoverflow.com/questions/154059/how-do-you-check-for-an-empty-string-in-javascript
    if (!fName.value.length > 0) {
        setTextColor(fNameValidationMsgField, "red");
        fNameValidationMsgField.innerText = canNotBeBlank(fName);
        canSubmit = false;
    } else {
        fNameValidationMsgField.innerText = "";
    }

    if (!lName.value > 0) {
        setTextColor(lNameValidationMsgField, "red");
        lNameValidationMsgField.innerText = canNotBeBlank(lName);
        canSubmit = false;
    } else {
        lNameValidationMsgField.innerText = "";
    }

    if (!email.value.length > 0) {
        setTextColor(emailValidationMsgField, "red");
        emailValidationMsgField.innerText = canNotBeBlank(email);
        canSubmit = false;
    } else {
        emailValidationMsgField.innerText = "";
    }

    // Verify email
    if (!confirmEmail()) {
        canSubmit = false;
    }

    // All checks passed
    if (canSubmit) {
        clearValidationMessages();

        let newUser = new User(fName.value, lName.value, email.value);

        let msg = "New user registered successfully!\n\n" +
                `First Name: ${newUser.firstName}\n` +
                `Last Name: ${newUser.lastName}\n\n` +
                `Check your email '${newUser.email}' for confirmation`;

        return displayNotification(msg, "green");
    }
    else {
        displayNotification("Fix the errors!", "red");
        return false;
    }
}

// Validates email contains @
function validateEmail(inputField, msgFieldId) {
    let msgArea = document.getElementById(msgFieldId);

    // Look for @ and only validation when field is not empty
    if (!inputField.value.match(/.+@.+/) && inputField.value.length > 0) {
        setTextColor(msgArea, "red");
        msgArea.innerText = `${inputField.name} validation failed! '@' was not present.`;
        return true;
    } else {
        msgArea.innerText = ""; // Nothing to display
        return false;
    }
}

// Confirm email by matching values from 2 email fields
function confirmEmail() {
    let emailField = document.getElementById("email-id");
    let confirmEmailField = document.getElementById("confirm-email");
    let confirmEmailValidationMsgField = document.getElementById("email-confirm-validation-msg");

    if (confirmEmailField.value !== emailField.value) {
        setTextColor(confirmEmailValidationMsgField, "red");
        confirmEmailValidationMsgField.innerText = `${confirmEmailField.name} does not match.`;
        return false;
    }
    else {
        confirmEmailValidationMsgField.innerText = "";
        return true;
    }
}

// Clear all fields validation messages
function clearValidationMessages() {
    let pageMessages = document.getElementById("page-messages");
    let fNameValidationMsgField = document.getElementById("fname-validation-msg");
    let lNameValidationMsgField = document.getElementById("lname-validation-msg");
    let emailValidationMsgField = document.getElementById("email-validation-msg");
    let confirmEmailValidationMsgField = document.getElementById("email-confirm-validation-msg");

    pageMessages.innerText = "";
    fNameValidationMsgField.innerText = "";
    lNameValidationMsgField.innerText = "";
    emailValidationMsgField.innerText = "";
    confirmEmailValidationMsgField.innerText = "";
    return true;
}

// Displays general error in page-messages Div
function displayNotification(msg, color) {
    let pageMessages = document.getElementById("page-messages");

    // Display in user defined color or follow element CSS rule
    color ? (setTextColor(pageMessages, color)) : "";

    pageMessages.innerText = msg;
    return true;
}

// Returns validation failure message with field name
function canNotBeBlank(field) {
    return `${field.name} cannot be blank.`;
}

function setTextColor(field, color) {
    field.style.color = color;
}