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

function verife() {
    if(input.value == secret) {
        alert("WOW, you discover the secret, the number is " + secret);
    } else {
        alert("Sorry, you choice the wrong number :/");
        alert("The right number is " + secret);
    }
}

var button = document.querySelector("button");

button.onclick = verife;