//for (var i = 0; i < 9; i++) {
 //  console.log(i)}; 

//for (var bottlesOfBeer = 99; bottlesOfBeer > 0; bottlesOfBeer--) {
//	console.log(bottlesOfBeer + " bottles of beer on the wall" + bottlesOfBeer + " bottles of beer")
//}; 


//+ " bottles of beer on the wall" + bottlesOfBeer 
//		+ " bottles of beer. take one down. pass it around" + bottlesOfBeer-1 + " bottles of beer on the wall"
var mass = 5;
var velocity = 5;

var kineticEnergy = function(mass, velocity) {return mass * Math.pow(velocity, 2)};


console.log(kineticEnergy(mass, velocity));

