// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}
/*appends a cat to the cats array and returns 
a new array, leaving the cats array unchanged:*/
function appendCat(name) {
  const newCat = [...cats, name];
  return newCat;
}

/*prepends a cat to the cats array and returns a new array, 
leaving the cats array unchanged:*/
function prependCat(name) {
  const preCat = [name, ...cats];
  return preCat;
}

/*removes the last cat in the cats array and returns a new array, 
leaving the cats array unchanged*/
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

/*removes the first cat from the cats array and returns a new array, 
leaving the cats array unchanged:*/
function removeFirstCat() {
  const firstCatgone = [...cats.slice(1)];
  return firstCatgone;
}

let numberArray = [1, 3, 5];
function doSomeMath(numbers) {
  //testing github changes to see if i can push
}
