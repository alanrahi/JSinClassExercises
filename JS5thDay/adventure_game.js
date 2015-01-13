var map = require(process.argv[2]);

var gameMaker = require('jsi-gamelib').map;

var prompt = require('prompt');

console.log(gameMaker);

//puts player into the entrance room
var currentRoom;
	
	map.rooms.forEach(function(room) 
		{
		if (room.entrance) {currentRoom = room;}
		});
	
		


	


prompt.start();

var roomKeys = { "a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8, "i":9, "j":10, "k":11}

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

prompt.get(property, function(err, input) 
{
		var move = input;
		console.log(input);

	if (input === "north")
		{ maps.rooms.forEach(function(room) 
			{
				if (room.name === currentRoom.north) {currentRoom = room;}
			});
		};

	if (input === "south")
		{ maps.rooms.forEach(function(room)	
			{
				if (room.name === currentRoom.north) {currentRoom = room;}
			});
		};

	if (input === "east") 
		{ maps.rooms.forEach(function(room) 
			{
				if (room.name === currentRoom.east) {currentRoom = room;}
			});
		}

	if (input === "west") 
		{ maps.rooms.forEach(function(room) 
			{
				if (room.name === currentRoom.west) {currentRoom = room;}
			});
		}	
});

var WhereYouCanGo = WhereCanYouGo(player.inRoom);

var property = {
	direction: 'input',
	message: "You are standing in a room. There \
are " + WhereYouCanGo.length + " Doors. You can go " + WhereYouCanGo + " Please choose a direction."
};

prompt.get(property, function(err, input) 
{
		var move = input;
		console.log(input);

	if (input === "north")
		{ maps.rooms.forEach(function(room) 
			{
				if (room.name === currentRoom.north) {currentRoom = room;}
			});
		};

	if (input === "south")
		{ maps.rooms.forEach(function(room)	
			{
				if (room.name === currentRoom.north) {currentRoom = room;}
			});
		};

	if (input === "east") 
		{ maps.rooms.forEach(function(room) 
			{
				if (room.name === currentRoom.east) {currentRoom = room;}
			});
		}

	if (input === "west") 
		{ maps.rooms.forEach(function(room) 
			{
				if (room.name === currentRoom.west) {currentRoom = room;}
			});
		}	
});










	



