"use strict";
// 1. stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // 2.nei multipli di 3 viene stampato "Fizz"
    if (i % 3 === 0) console.log("Fizz");
    // 3.nei multipli di 5 viene stampato "Buzz"
    else if (i % 5 === 0) console.log("Buzz");
    // 4. nei multipli di 5 viene stampato "FizzBuzz"
    else if (i % 15 === 0) console.log("FizzBuzz");
    else console.log(i);
}