function gap () {
    document.write("<br>");
    document.write("<br>");
}

function show (text) {
    document.write(text);
    gap();
}
var secret = parseInt(Math.random () * 10);
var input = document.querySelector("input");
input.focus();

function verife() {
    if(input.value == secret) {
        alert("WOW, you're a great mentalist, the magic number really is " + secret);
    } else {
        alert("Sorry, you choose the wrong number :/");
        alert("The right number is " + secret);
    }
    input.value = "";
    input.focus();
}

var button = document.querySelector("button");

button.onclick = verife;