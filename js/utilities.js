// generate pin
function generatePin() {
    const pin = Math.round(Math.random() * 1000000);
    if (pin.toString().length === 6) {
        return pin;
    }
    // else {
    return generatePin(); // recursion
    // }
};

// get input value
function getPin(inputId) {
    const inputField = document.getElementById(inputId);
    return inputField.value;
};

// set input value
function displayPin(inputId, pin) {
    const inputField = document.getElementById(inputId);
    inputField.value = pin;
};

// display calculator pin
function displayCalcPin(keyValue) {
    const typedNumField = document.getElementById("typed-numbers");
    if (isNaN(keyValue)) {
        if (keyValue === "C") {
            typedNumField.value = "";
        }
        else if (keyValue === "<") {
            const pinArr = typedNumField.value.split("");
            pinArr.pop();
            const newPin = pinArr.join("");
            typedNumField.value = newPin;
        }
    }

    else {
        const newTypedNum = typedNumField.value + keyValue; // concat
        displayPin("typed-numbers", newTypedNum);
    }
};

// pin match or not
function pinMatchCheck() {
    const generatePin = getPin("display-pin");

    const typedPin = getPin("typed-numbers");

    const validMessage = document.getElementById("pin-success");
    const inValidMessage = document.getElementById("pin-failure");
    if (generatePin === typedPin && generatePin.length === 6 && typedPin.length === 6) {
        validMessage.style.display = "block";
        inValidMessage.style.display = "none";
        document.getElementById("try-left").style.display = "none";
    }
    else {
        inValidMessage.style.display = "block";
        validMessage.style.display = "none";
    }
};