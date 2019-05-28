var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
 function removeFirstKitten(){
   var newKittens = kittens.slice(1)
   return newKittens
 }
 
 function removeLastKitten(){
   var newKittens = kittens.slice(0, kittens.length-1)
   return newKittens
 }
 
 function prependKitten(name){
   var newKittens = [name,...kittens]
   return newKittens
 }
 
 function appendKitten(name){
   var newKittens = [...kittens, name]
   return newKittens
 }
 
 var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}