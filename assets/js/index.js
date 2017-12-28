// Returns validation failure message with field name
function canNotBeBlank(field) {
    return `${field.name} cannot be blank.`;
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
        fNameValidationMsgField.style.color = "red";
        fNameValidationMsgField.innerText = canNotBeBlank(fName);
        canSubmit = false;
    } else {
        fNameValidationMsgField.innerText = "";
    }

    if (!lName.value > 0) {
        lNameValidationMsgField.style.color = "red";
        lNameValidationMsgField.innerText = canNotBeBlank(lName);
        canSubmit = false;
    } else {
        lNameValidationMsgField.innerText = "";
    }

    if (!email.value.length > 0) {
        emailValidationMsgField.style.color = "red";
        emailValidationMsgField.innerText = canNotBeBlank(email);
        canSubmit = false;
    } else {
        emailValidationMsgField.innerText = "";
    }

    // Verify email
    if (confirmEmail() === false) {
        canSubmit = false;
    }

    // All checks passed
    if (canSubmit) {
        clearValidationMessages();
        let msg = "New user registered successfully!\n\n" +
                `First Name: ${fName.value}\n` +
                `Last Name: ${lName.value}\n\n` +
                `Check your email '${email.value}' for confirmation`;
        alert(msg);
        return true;
    }
    else
    {
        displayFixErrorNotification();
        return false;
    }
}

// Validates email contains @
function validateEmail(inputField, msgFieldId) {
    let msgArea = document.getElementById(msgFieldId);

    // Look for @ and only validation when field is not empty
    if (!inputField.value.match(/.+@.+/) && inputField.value.length > 0) {
        msgArea.style.color = "red";
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
        confirmEmailValidationMsgField.style.color = "red";
        confirmEmailValidationMsgField.innerText = `${confirmEmailField.name} does not match.`;
        return false;
    }
    else
    {
        confirmEmailValidationMsgField.innerText = "";
        return true;
    }
}

// Displays general error in page-messages Div
function displayFixErrorNotification(){
    let pageMessages = document.getElementById("page-messages");
    pageMessages.style.color = "red";
    pageMessages.innerText = "Fix the errors!";
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