var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
 function removeFirstKitten(){
   var newKittens = kittens.slice(1)
   return newKittens
 }
 
 function removeLastKitten(){
   var newKittens = kittens.shift(0, kittens.length-1)
   return newKittens
 }