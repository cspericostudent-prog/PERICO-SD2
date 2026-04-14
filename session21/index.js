// console.log("hello World");


// [SECTION] JavaScript Object
// imititates real-world descriptions and real world objects

// let arr = [1, 2, 3];

// let obj = {
//     name: "Carlo",
//     age: 22

// }

// console.log(typeof arr);
// console.log(typeof obj);

// let person = {
//     completeName: "Juan Dela Cruz",
//     age: 25, 
//     height: 160,
//     weight: 85,
//     contactNumber: [123, 4567 ], 
//     address: {
//         houseNo: 1,
//         brgy: "Del Pilar",
//         city: "CSFP"
//     }
// }

// console.log(person);

// // Dot Notation 
// // Access values inside an object property

// console.log(person.completeName);

// console.log(`Hi, my name is ${person.comepleteName} and I am ${person.age} years old!`);

// console.log(person[`completeName`]);

// // Updating a value via dot noatation
// person.completeName = "John Doe";

// console.log(person)

// person.email = "jdoe@gmail.com";

// console.log(person);

// // Class and Objects
// // to add properties in a class use "this" keyword
// function Animal(name, breed, color, kind){
//     // constructors
//     this.name = name;
//     this.kind = kind;
//     this.breed = breed; 
//     this.color = color;
//     this.makeSound = function(){
//         if(this.kind == "dog") {
//             console.log("Woof! Woof!");
//         }else if(this.kind == "cat"){
//              console.log("Meow!");
//         }else {
//             console.log("Cannot provide sound for this Animal.")
//         }
//     }
// }

// // Instance -> cope/duplicate of a function class 

// let dog = new Animal("Bruno", "Aspin", "brown", "dog");
// console.log(dog);
// console.log(dog.name);
// dog.makeSound();

// let cat = new Animal("Luna", "Puspin", "Gray", "cat");
// console.log(cat);
// console.log(cat.name);
// cat.makeSound();

// let trex = new Animal("Rex", "Dino", "Green", "Dinosaur");
// trex.makeSound();

// console.log(person.contactNumber[1]);
// console.log(person.address.brgy);


// [SECTION] Pokemon 

function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.maxHealth = health * level; // Store max health for the check
    this.health = this.maxHealth;
    this.mana = mana;

    this.tackle = function(target) {
        let damage = 20;
        console.log(`${this.name} used tackle attack!`);
        target.health -= damage;
    };

    this.useHealPotion = function() {
        if (this.health < this.maxHealth) {
            if ((this.health + 150) >= this.maxHealth) {
                this.health = this.maxHealth;
            } else {
                this.health += 150;
            }
            console.log(`${this.name} used Potion! Health is now: ${this.health}`);
        } else {
            console.log(`${this.name}'s health is already full!`);
        }
    };

    this.skill1 = function(target) {    
        if (this.mana < 50) {
            console.log(`${this.name}'s mana is not enough! MANA: ${this.mana}`);
            return; 
        }

        if (this.name == "Pikachu") {
            let damage = 150;
            console.log(`${this.name} used ThunderBolt!`);
            target.health -= damage;
            this.mana -= 50;
        } else if (this.name == "Charmander") {
            let damage = 150;
            console.log(`${this.name} used Flame Thrower!`);
            target.health -= damage;
            this.mana -= 50;
        }
        
        console.log(`${this.name} mana: ${this.mana}, ${target.name} health: ${target.health}`);
    };
}



let pikachu = new Pokemon("Pikachu", 5, 100, 100);
let charmander = new Pokemon("Charmander", 5, 100, 100);

pikachu.tackle(charmander);
pikachu.tackle(charmander);
pikachu.tackle(charmander);

console.log(charmander);

charmander.tackle(pikachu);
console.log(pikachu);

charmander.useSkill1(pikachu);
charmander.useSkill1(pikachu);
charmander.useSkill1(pikachu);

pikachu.useHealPotion();
pikachu.useHealPotion();
pikachu.useHealPotion();
pikachu.useHealPotion();
pikachu.useHealPotion();
console.log(pikachu);




