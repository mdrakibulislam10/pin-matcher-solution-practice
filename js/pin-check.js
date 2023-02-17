// number key handler (event bubble, delegate);
document.getElementById("calculator").addEventListener("click", function (event) {
    displayCalcPin(event.target.innerText);
});