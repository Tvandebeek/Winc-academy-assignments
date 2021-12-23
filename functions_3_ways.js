//function declaration

function sum1 (number1, number2){
    return((number1*number1)+(number2*number2))*((number1*number1)+(number2*number2))
}

console.log (sum1(2,3));


//function expression

const sum2 = function (number1, number2){
    return((number1*number1)+(number2*number2))*((number1*number1)+(number2*number2))
};

console.log (sum2(2,3));


//arrow function

const sum3 = (number1, number2) => {
    return((number1*number1)+(number2*number2))*((number1*number1)+(number2*number2))
};

console.log (sum3(2,3));
