function alwaysHungry(arr) {
    if (arr.includes("food")){;
    console.log("Yummy");
} else if (!(arr.includes("food"))){
    console.log("I am Hungry");
}
}
  
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

