// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
        return cats;  
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
        return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
        return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
        return cats;
}

function appendCat(Broom){
    const allCats = [...cats, "Broom"];
        return allCats;
}

function prependCat(Arnold){
    const allCats = ["Arnold", ...cats];
        return allCats;
}

function removeLastCat() {
    const removedLastCat = cats.slice(0, cats.length-1);
        return removedLastCat;
}

function removeFirstCat() {
    const removedFirstCat = cats.slice(1);
        return removedFirstCat;
}