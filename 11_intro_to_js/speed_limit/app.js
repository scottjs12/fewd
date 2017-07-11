var speed =  parseInt ( prompt("What is your current speed?"));
var speedlimit =  parseInt ( prompt("What is the speed limit?"));

if (speed > speedlimit + 10) {
	console.log("Slow Down!");
} else  if (speed < speedlimit - 10) {
	console.log("Speed Up!");
	} else {
	console.log("You're doing just fine.");
}


