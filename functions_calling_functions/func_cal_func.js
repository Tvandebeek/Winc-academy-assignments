//don't get it to work right, will check in solutions

const checkAge = function(age){
    console.log("input", age);
    if(age<18){
        return "false";
    }
    return "true";
};


const sayHello = function(checkAge){
    console.log ("input uit checkAge...", checkAge);
    let answer;
    if(checkAge= "true"){
       answer= "Hello there";
    }
    answer= "Hey kiddo";
    return answer;
};

console.log (sayHello (17));