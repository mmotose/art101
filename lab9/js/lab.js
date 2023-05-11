// Author: Miyuki Motose
// Date: 5/10/2023

// Constants

//assign outputEl to "output"
var outputEl = document.getElementById("output");

//create new p elements using createElement("p")
var new1El = document.createElement("p");
var new2El = document.createElement("p");
var new3El = document.createElement("p");

//set innerHTML content of new1El and new2El to strings
new1El.innerHTML = "Panguins are funny.";
new2El.innerHTML = "Cheese cup of blue.";
new3El.innerHTML = "HAHA I'm a wildcard";

//append to child node of outputEl
//display in output div
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.insertBefore(new3El, new1El);

output
//decorate
new1El.style.color = "yellow";
new1El.style.fontFamily = "Chiller";

new2El.style.color = "blue";
new2El.style.fontFamily = "Comic Sans MS";

new3El.style.color = "black";
new3El.style.fontSize = "40px";
new3El.style.fontFamily = "Marker Felt";

/*
You can also edit specifics with the text by using "style". For example with my code (pls don't copy and edit yourself): 
// Add styles to the first <p> element
new1El.style.color = "blue";
new1El.style.textDecoration = "underline";

// Add styles to the second <p> element
new2El.style.color = "purple";
new2El.style.fontStyle = "italic";

// Create a new <p> element
var new3El = document.createElement("p");
// Set the inner HTML content of the third <p> element
new3El.innerHTML = "Hello World!";

// Add styles to the third <p> element
new3El.style.color = "yellow";
new3El.style.fontWeight = "bold";
*/