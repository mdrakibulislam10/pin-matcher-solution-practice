// generate pin handler
document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = generatePin();
    displayPin("display-pin", pin);
});