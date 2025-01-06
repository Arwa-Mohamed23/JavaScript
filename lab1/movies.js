var Movies = ["Inception", "Harry Potter", "Army Of Thieves","Smile"];

var copiedMovies = Movies.slice();
//var copiedMovies = Movies;

copiedMovies[2] = "Train to Busan";

console.log("Movies array:", Movies);
console.log("copied Movies array:", copiedMovies);


var lastItem1 = Movies[Movies.length - 1];
var lastItem2 = Movies.slice(-1)[0];
var lastItem3 = Movies.slice().pop();

console.log("Last item 1:", lastItem1);
console.log("Last item 2:", lastItem2);
console.log("Last item 3:", lastItem3);

Movies.unshift("Shark: The Beginning");

console.log("Updated movies array:", Movies);