// Returns validation failure message with field name
function canNotBeBlank(field) {
    return `${field.name} cannot be blank.`;
}

// Validate form fields are not blank
function validateFields() {
    let fName = document.getElementById("first-name");
    let fNameValidationMsgField = document.getElementById("fname-validation-msg");
    let lName = document.getElementById("last-name");
    let lNameValidationMsgField = document.getElementById("lname-validation-msg");
    let email = document.getElementById("email-id");
    let emailValidationMsgField = document.getElementById("email-validation-msg");
    let canSubmit = true; // All validations passed?

    // Checking String length is faster than comparing with "" because the interpreter does not need to
    // create a String object for ""
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

    if (canSubmit) {
        let msg = "New user registered successfully!\n\n" +
                `First Name: ${fName.value}\n` +
                `Last Name: ${lName.value}\n\n` +
                `Check your email '${email.value}' for confirmation`;
        alert(msg);
        return true;
    }

    return false;
}

// Validates email contains @
function validateFieldValue(inputField, msgFieldId) {
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