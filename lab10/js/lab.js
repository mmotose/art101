// Author: Miyuki Motose
// Date: 5/15/2023

// Constants

function sortMe(str) {
	return str.split('').sort().join('');
}

var buttonEl = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
//get username value
  var username = document.getElementById("user-name").value;
//sort username
  var nameStr = sortMe(username);
//find output element
  var userEl = document.getElementById("output");
//create new h1 element
  var new1El = document.createElement("h1");
//set output h1 element to nameStr
  new1El.innerHTML = nameStr;
  userEl.appendChild(new1El);

})