"use strict";
const add = (n1, n2, showResult) => {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
};
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const result = add(number1, number2, printResult);
