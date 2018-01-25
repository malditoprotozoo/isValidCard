/* This will check if a credit card numbers is valid, according
to the Luhn Algorithm */

function isValidCard(numbers) {
  do {
    numbers = prompt('Por favor, ingrese el número de su tarjeta de crédito, sin espacios.');
    // If the person ignore this warning, the number will be considered invalid
    if (numbers !== '' && numbers !== ' ') {
      // The input will be a string, so this converts it into an array
      var arr = numbers.split('');
    } else {
      alert('Ingrese un número válido ¬¬');
    }
  } while (numbers === '' || numbers === ' ');
  // Will contain the array in reverse
  var arrReverse = arr.reverse();
  var arrOfNumbers = [];
  /* So far, the numbers are on an array, but each one is typeof string.
  This will contain each digit typeof number. */
  // It'll sum numbers at odd positions
  var sumOdds = 0;
  // It'll contain numbers at even positions
  var even = [];
  // It'll contain numbers at even positions multiplied per two
  var evenPerTwo = [];
  // It'll contain numbers smaller than nine.
  var singlefy = [];
  // It'll will sum numbers at even positions
  var evenFinal = 0;
  // It'll contain the final result.
  var check = '';

  for (var i = 0; i < arrReverse.length; i++) {
    arrOfNumbers.push(parseInt(arrReverse[i]));
  };

  for (var num = 0; num < arrOfNumbers.length; num++) {
    // Positions in JS are 'reversed', so the even positions are the odd positions.
    if (num % 2 === 0) {
      sumOdds += arrOfNumbers[a];
    } else if (num % 2 !== 0) {
      even.push(arrOfNumbers[num]);
    }
  };

  for (var index = 0; index < even.length; index++) {
    evenPerTwo.push(even[index] * 2);
  };

  for (var inter = 0; inter < evenPerTwo.length; inter++) {
    if (evenPerTwo[inter] > 9) {
      singlefy.push(evenPerTwo[inter] - 9);
    } else {
      singlefy.push(evenPerTwo[inter]);
    }
  };

  for (var digit = 0; digit < singlefy.length; digit++) {
    evenFinal = evenFinal + singlefy[digit];
  };

  if ((evenFinal + sumOdds) % 10 === 0) {
    check = 'Yay! Tu tarjeta es válida';
  } else {
    check = 'Lo sentimos, tu tarjeta es inválida :(';
  };

  return alert(check);
};