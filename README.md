# isValidCard
##### Segunda parte del proyecto final del primer sprint de Laboratoria: crear un sitio web que verifique si el número de una tarjeta de crédito es válida, usando el algoritmo de Luhn.

## Diagrama de Flujo
![Diagrama de Flujo](https://i.imgur.com/r41uxG5.png)

## Comentarios
Para el algoritmo de Luhn en lugar de sumar los dígitos con dos números les resté nueve. Me pareció más sencillo de integrar al código. El resultado es el mismo.

## Pseudocódigo de mi función
```
Crea una función que verifique si el número de una tarjeta de crédito es válido (numbers){
	El argumento numbers será reemplazado por el número de la tarjeta que ingrese el usuario en el prompt;
	var arr = Almacenará el input del usuario al que se le ha aplicado la función split para pasar el string a array.
	var arrReverse = Almacenará el array anterior en reversa.
	//Hasta este momento, los números están en formato string, cada uno dentro de un string independiente. La siguiente variable los almacenará como numbers en un array.
	var arrOfNumbers = [];
	var sumOdds = Almacenará la suma de los números en posiciones impares;
	var even = [Almacenará los números en posiciones pares];
	var evenPerTwo = [Almacenará los números en posiciones pares multiplicados por dos];
	var singlefy = [Almacenara los números en posiciones pares convertidos en números de un dígito];
	var evenFinal = Almacenará la suma del array anterior;
	var check = "Almacenará la respuesta que le será mostrada al usuario".

	Crea un loop for que pasa los dígitos de string a number;

	Crea un loop for que sumará los números en posiciones impares en sumOdds y los números en posiciones pares en el array arrOfNumbers.

	Crea un loop for en dónde los dígitos en arrOfNumbers se multiplican por dos y se almacenen como array en evenPerTwo;

	Crea un loop en dónde si los números en evenPerTwo son menores a nueve se ingresen tal cual en una nueva variable llamada singlefy y si son mayores a 9, se ingresen a singlefy luego de restarles 9;

	Crea un loop que sume todos los números dentro de singlefy y los almacene el resultado en evenFinal;

	Si evenFinal + sumOdds módulo de 10 da como resultado 0, el valor de check sera el string "TU tarjeta es válida";
		} De lo contrario { 
		El valor de check será "Tu tarjeta es inválida";

	}

	Se le muestra al usuario el valor de check;
}

```