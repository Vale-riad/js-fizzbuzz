"use strict";
const div = document.getElementById("numbers");
// 1. stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('board__number');
    element.innerHTML = i;
    div.append(element);
    // 2.nei multipli di 15 viene stampato "FizzBuzz"
     if (i % 15 === 0){
        element.classList.add('fizzbuzz');
        console.log(`FizzBuzz`)
        element.innerHTML ="FizzBuzz"
        // 4. nei multipli di 5 viene stampato "Buzz"
    }else if (i % 5 === 0){
        element.classList.add('buzz');
        console.log(`Buzz`)
        element.innerHTML ="Buzz"
        // 3.nei multipli di 3 viene stampato "Buzz"
    }if (i % 3 === 0) {
        element.classList.add('fizz');
   console.log(`Fizz`);
    element.innerHTML ="Fizz"
    
    element.innerHTML = i;
    console.log(i);
}
 
}


