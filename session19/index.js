// console.log("Hello World");


// [SECTION] Functions with Parameters

/*
Syntax;

function functionName(Params1, params2, ......)[
    //code block
]

*/

function greeting(){
    let userInput = prompt("Please Enter your Name.");
    console.log("Hello," + userInput);
}

// Function with parameter
// function name -> is our parameter
// parameters acts as a variable or storage for a specific function
function sayHello(name){
    console.log("Hello from function with parameter," + name);

}
// sayHello(argument) -> is to be passed in the function parameter
sayHello("John Doe")

// Multiple Parameters

function completeName(firstName, middleName, lastName) { 
    console.log(`Hello, ${firstName} ${middleName} ${lastName}`); 
} 

completeName("Juan", "Dela", "Cruz!");


// Function and return statement
// return -> will hold a value to be passed outsidet he function



function print(){
    console.log("Hello world!");
    return "Hello world!"
}
print();


let sum = function(num1, num2){
    let total = num1 + num2;
    console.log("Total:" + total);
    return total;

}
let result = sum(40, 45);
console.log(result);
checkRemarks(result)
// if(sum >= 30) {
//     console.log("passed!");
// }else{
//     console.log("failed!");
// }

function checkRemarks(score){
    if (score >= 75){
        console.log("Congrats, you passed!");
    }else{
        console.log("Better luck next time!");
    }
}


let registration = function(name, age){
    if(age <= 17){
        console.log("sorry you cannot register.");
    }else{
        console.log(`${name} please proceed to the next step`);
        return age;
    }
}

let value = registration("John Doe", 26);
console.log("Age:" + value)

function checkAge(age){
    if(age <= 17){
        console.log("you cannot proceed.");
    }else if(age <= 30){
        console.log("you can apply for a basic account.")
    }else{
        console.log("you can apply for premium account")
    }
}
checkAge(value);
