// Author: Miyuki Motose
// Date: 5/1/2023

// Constants
myTransport = ["Toyota RAV4", "Mountain Bike"];

myMainRide = {
    make: "Toyota",
    model: "RAV4",
    color: "Blizzard Pearl",
    year: 2006,
    
    age : function(){
        return 2023 - this.year;
    }
}

document.writeln("Getting Around: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    