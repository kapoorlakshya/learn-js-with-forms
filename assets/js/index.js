"use strict";

function confirmSubmit() {
    var fName = document.getElementById("first_name").value;
    var lName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;

    var msg = `New user registered successfully!\n\n` +
        `First Name: ${fName}\n` +
        `Last Name: ${lName}\n\n` +
        `Check your email '${email}' for confirmation`;
    alert(msg);
}

function validateFieldValue(inputField, msgFieldId, val) {
    if (!inputField.value.match(/.+@.+/)) {
        var msgArea = document.getElementById(msgFieldId);
        msgArea.innerText = `${inputField.name} validation failed! '@' is required.`;
        msgArea.style.color = "red";
        return true;
    }
    else {
        return false;
    }
}