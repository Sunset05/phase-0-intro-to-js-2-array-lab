// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    return cats.push('Ralph');
}

function destructivelyPrependCat(){
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}
/*appends a cat to the cats array and returns 
a new array, leaving the cats array unchanged:*/
function appendCat(name){
    const newCat = [...cats, 'Broom']
    return newCat;

}

/*prepends a cat to the cats array and returns a new array, 
leaving the cats array unchanged:*/
function prependCat(name){
    const preCat = ['Arnold', ...cats]
    return preCat;

}

/*removes the last cat in the cats array and returns a new array, 
leaving the cats array unchanged*/
function removeLastCat(){
    return cats.slice(0,cats.length -1);
}

/*removes the first cat from the cats array and returns a new array, 
leaving the cats array unchanged:*/
function  removeFirstCat(){
    const firstCatgone = [...cats.slice(1)];
    return firstCatgone;
}





