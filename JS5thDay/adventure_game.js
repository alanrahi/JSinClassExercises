var map = require(process.argv[2]);

var gameMaker = require('jsi-gamelib').map;

var prompt = require('prompt');

console.log(gameMaker);

//puts player into the entrance room
var entranceRoom;
	
	map.rooms.forEach(function(room) 
		{
		if (room.entrance) {entranceRoom = room;}
		});
	
		

var player = {
	"inRoom": entranceRoom,
	
}

prompt.start();

var affordances = [];


function WhereCanYouGo(room) {
 
	
	affordances = [];
	
	if (room.north) {affordances.push("north ");}
	if (room.west) {affordances.push("west ");}
	if (room.south) {affordances.push("south ");}
	if (room.east) {affordances.push("east");}
	
	return affordances;
	
}


var WhereYouCanGo = WhereCanYouGo(player.inRoom);

var property = {
	direction: 'input',
	message: "You are standing in a room. There \
are " + WhereYouCanGo.length + " Doors. You can go " + WhereYouCanGo + " Please choose a direction."
};

prompt.get(property, function(err, input) {
	var move = input;
	console.log(input);

	maps.rooms.forEach(function(room) {
		if (input === "north") { for (var i = 0; i < rooms.length; i++) {
	
+			if ("E" === rooms[i].name) 
+				currentRoom = rooms[i];}
	console.log(currentRoom.name);


	})



});











	



