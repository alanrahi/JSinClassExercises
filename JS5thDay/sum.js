
var readline = require('readline');

var rl = readline.createInterface({
  	input: process.stdin,
 	output: process.stdout
});

rl.question("enter a number", function(num1) {
	
    var a = parseInt(num1);
	rl.question("enter another number" , function(num2) {
		var b = parseInt(num2);
		var sum = a + b;	

		console.log("Thanks! The sum is ", sum);

		rl.close();	
	}); 
    

	

});


