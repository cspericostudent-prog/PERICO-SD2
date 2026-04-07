// let friends =  [];

// function showFriends(){
//     if(friends.length <= 0){
//         console.log("you don't have any friends yet.");
//     }else{
//         console.log(friends);
//     }

// }

// function addFriend(name){
//     let checkFriend = friends.includes(name.toUpperCase());
    
//     if(checkFriend == true){
//         console.log(`${name.toUpperCase()} is already on your friend list.`)

//     }else{
//         friends.push(name.toUpperCase());
//         console.log(`You added ${name.toUpperCase()}.`)
//     }
//     }

// // Remove specific friend -> using their name


let friends = [];

function showFriends(){
    if(friends.length <= 0){
        console.log("you don't have any friends yet.");
    }else{
        console.log(friends);
    }
}

function addFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());
    if(checkFriend == true){
        console.log(`${name.toUpperCase()} is already on your friend list.`);
    }else{
        friends.push(name.toUpperCase());
        console.log(`You added ${name.toUpperCase()}.`);
    }
}

// Function to remove a specific friend
function removeFriend(name){
    let upperName = name.toUpperCase();
    let index = friends.indexOf(upperName);
    
    if(index == -1){
        friends.splice(index, 1); // Remove 1 element at the specified index
        console.log(`You removed ${upperName}.`);
    }else{
        console.log(`${upperName} is not on your friend list.`);
    }
}

addFriend("Alice");
addFriend("Bob");
showFriends(); 
removeFriend("Alice");
showFriends(); 
