/*This will check if a credit card numbers is valid, according
to the Luhn Algorithm */
function isValidCard(numbers) {

    do {
        numbers = prompt("Por favor, ingrese el número de su tarjeta de crédito, sin espacios.");
        // If the person ignore this warning, the number will be considered invalid
        if (numbers !== "" && numbers !== " ") {
            var arr = numbers.split(""); //The input will be a string, so this converts it into an array
        } else {
            alert("Ingrese un número válido ¬¬");
        }
    } while (numbers === "" || numbers === " ");


    var arrReverse = arr.reverse(); //Will contain the array in reverse
    var arrOfNumbers = []; /*So far, the numbers are on an array, but each one is typeof string. 
    This will contain each digit typeof number.*/
    var sumOdds = 0; //It'll sum numbers at odd positions
    var even = []; //It'll contain numbers at even positions
    var evenPerTwo = []; //It'll contain numbers at even positions multiplied per two
    var singlefy = []; //It'll contain numbers smaller than nine.
    var evenFinal = 0; //It'll will sum numbers at even positions
    var check = ""; //It'll contain the final result.

    for (var i = 0; i < arrReverse.length; i++) {
        arrOfNumbers.push(parseInt(arrReverse[i]));
    }


    for (var a = 0; a < arrOfNumbers.length; a++) {
        if (a % 2 === 0) { //Positions in JS are "reversed", so the even positions are the odd positions.
            sumOdds += arrOfNumbers[a];
        } else if (a % 2 !== 0) {
            even.push(arrOfNumbers[a]);
        }
    }

    for (var b = 0; b < even.length; b++) {
        evenPerTwo.push(even[b] * 2);
    }

    for (var c = 0; c < evenPerTwo.length; c++) {
        if (evenPerTwo[c] > 9) {
            singlefy.push(evenPerTwo[c] - 9);
        } else {
            singlefy.push(evenPerTwo[c]);
        }
    }

    for (var d = 0; d < singlefy.length; d++) {
        evenFinal = evenFinal + singlefy[d];
    }

    if ((evenFinal + sumOdds) % 10 === 0) {
        check = "Yay! Tu tarjeta es válida";
    } else {
        check = "Lo sentimos, tu tarjeta es inválida :(";
    }

    return alert(check);

}