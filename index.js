// Write your solution here!
function destructivelyAppendCat(catName = "Tom") {
    cats.push(catName);
    return cats;
}
function destructivelyPrependCat(catName = "Tom") {
    cats.unshift(catName);
    return cats; 
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats; 
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats; 
}
function appendCat(catName = "Tom") {
    let catsCopy = [...cats];
    catsCopy.push(catName);
    return catsCopy;
}
function prependCat(catName = "Tom") {
    let catsCopy = [...cats];
    catsCopy.unshift(catName);
    return catsCopy;
}
function removeLastCat(){
    let catsCopy = cats.slice(0);
    catsCopy.pop();
    return catsCopy;
}
function removeFirstCat() {
    let catsCopy = cats.slice(0);
    catsCopy.shift();
    return catsCopy;
}
let cats = ["Milo", "Otis", "Garfield"];

destructivelyAppendCat();
destructivelyPrependCat();
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat();
prependCat();
removeLastCat();
removeFirstCat();


