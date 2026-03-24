let limit = prompt("How high should we count?");

for (let i = 1; i <= limit; i++) {
    console.log("COUNT: " + i + " - " + (
        i % 15 === 0 ? "COCO MELON" : 
        i % 3 === 0 ? "COCO" : 
        i % 5 === 0 ? "MELON" : i
    )); 
}