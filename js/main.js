"use strict";
// 1. stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if ( i % 3 === 0){
        console.log("fizz");
    } else if ( i % 5 === 0){
    console.log("Buzz")
    }if ( i % 15 === 0) {
        console.log("FizzBuzz");
    }
}