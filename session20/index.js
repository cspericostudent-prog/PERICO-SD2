// console.log("Hello World");

// [SECTION] Array
// An Array is also a storage for multiple elements/values
// The best practice is values/elements stored in an array should be of the same data type.

let pokemon = ["pikachu", "charmander", "Squirtle",];

console.log(pokemon);
console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);

console.log(`My favorite pokemon is ${pokemon[0]}.`);

console.log(`My favorite pokemon is ${pokemon[0].toLocaleUpperCase()}`);

// get the length of an arrray
console.log(pokemon.length);

// Accessing an index that is not existing will result -> 
console.log(pokemon[5]);

// Array Mutation
// Modifying Array Elements

pokemon[3] = "balbusaur";
console.log(pokemon[3]);

console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "charmeleon";
console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Mew";
console.log(pokemon);
console.log(pokemon.length);

// Add an Element on the tail of an array without knowing the actual index number.

console.log(pokemon.length);
pokemon[pokemon.length] = "snorlax";

console.log(pokemon);
console.log(pokemon.length);

// Access the last element on the array
console.log(pokemon [pokemon.length - 1]);


// [SECTION] MDOERN ARRAY MUATION METHODS

let fruits = ["Apple", "Banana", "Melon",];

// push -> add an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.push("Strawberry");
console.log("Push Method: " + fruits);

// pop() -> remove an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.pop();  //strawberry -> removed
fruits.pop();  //melon -> removed
console.log("Push Method: " + fruits);

// umshift -> adds an elemt on the head part of the array 
console.log("Original Array: "  + fruits);
fruits.unshift("strawberry");
console.log("unshift method: " + fruits);

fruits.unshift("grapes", "melon", "kiwi");
console.log("Unshift Method: " + fruits);

// shifts -> removes an element on the head of the array
fruits.shift();
fruits.shift();
console.log("shift Method: " + fruits);

// sort() -> sorts elements in an array

fruits.sort();
console.log(fruits);

// reverse() -> sorts in reverse manner
fruits.reverse();
console.log(fruits);

// splice() -> adds/removes an elements on a specified index

fruits.splice(1, 2, "Blue Berry");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

// forEach()-> read 

fruits.forEach((x) => {
    console.log(x);
})