function isValidCard(numbers) {

    do {
        numbers = prompt("Por favor, ingrese el número de su tarjeta de crédito, sin espacios.");
        if (numbers !== "" && numbers !== " ") {
            var arr = numbers.split("");
        } else {
            alert("Ingrese un número válido ¬¬");
        }
    } while (numbers === "" || numbers === " ");


    var arrReverse = arr.reverse(); 
    var arrOfNumbers = [];
    var sumOdds = 0;
    var even = [];
    var evenPerTwo = [];
    var singlefy = [];
    var evenFinal = 0;
    var check = "";

    for (var i = 0; i < arrReverse.length; i++) {
        arrOfNumbers.push(parseInt(arrReverse[i]));
    }


    for (var a = 0; a < arrOfNumbers.length; a++) {
        if (a % 2 === 0) {
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