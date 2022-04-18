// function gap () {
//     document.write("<br>");
//     document.write("<br>");
// }

// function show (text) {
//     document.write(text);
//     gap();
// }
// var secret = parseInt(Math.random () * 10);
// var input = document.querySelector("input");
// input.focus();

// function verife() {
//     if(input.value == secret) {
//         alert("WOW, you're a great mentalist, the magic number really is " + secret);
//     } else {
//         alert("Sorry, you choose the wrong number :/");
//         alert("The right number is " + secret);
//     }
//     input.value = "";
//     input.focus();
// }

// var button = document.querySelector("button");

// button.onclick = verife;

function raffle () {
    return Math.round(Math.random() * 10);
}

function drawNumber(amount){
    var secrets = [];
    var number = 1;

    while(number <= amount) {
        var randomNumber = raffle();
        var find = false;

        if(randomNumber !== 0) {
            for(var index = 0; index < secrets.length; index++) {

                if(secrets[index] == randomNumber) {
                    find = true;
                    break;
                }
            }
            if(find == false) {
                secrets.push(randomNumber);
                number++;
            }
        }
    }
    return secrets;
}

var secrets = drawNumber(3);

console.log(secrets);

var input = document.querySelector("input");
input.focus();

function verife() {
    var tryAgain = 0;
    while (tryAgain < 3) {
        if(input.value < 0 || input.value > 10) {
            alert("Your number isn't in the scale of 0-10, please, insert a new value!");
            input.value = parseInt(prompt("Insert a new number in a scale of 0-10!")); 
        }
        else {
            var find = false;
            for(var index = 0; index < secrets.length; index++) {
                if(input.value == secrets[index]) {
                    alert("You're a really mentalist, congratulations!!");
                    find = true;
                    tryAgain = 3;
                    break;
                }
            }
            if(find == false) {
                alert("Good trying, " + (3 - tryAgain) + " chances left");
                input.value = parseInt(prompt("Insert a new number!")); 
                tryAgain++;   
            }
        }
    }
}

input.value = "";
input.focus();

var button = document.querySelector("button");

button.onclick = verife;

// var ingredients = [];

//     var amount = parseInt(prompt("How many ingredients do you want?"));

//     if(isNaN(amount)) {
//         alert("That isn't a number, please, insert the value again");
//         var amount = parseInt(prompt("How many ingredients do you want?"));
//     }

//     var counter = 1;

//     while(counter <= amount) {

//         var ingredient = prompt("What's the name of " + counter + "º ingredient?");
//         var repeat = false;

//         for(var index = 0; index < ingredients.length; index++) {
//             if(ingredients[index] == ingredient){
//                 repeat = true;
//                 break;
//             }
//         }
//         if(repeat == false) {
//             ingredients.push(ingredient);
//             counter++;
//         }  
//     }

//     console.log(ingredients);