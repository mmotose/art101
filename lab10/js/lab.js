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
  //var new1El = document.createElement("h1");
//set output h1 element to nameStr
  //new1El.innerHTML = nameStr;
  userEl.innerHTML = nameStr;
  userEl.style.color = "purple";
  userEl.style.fontSize = "40px";
  userEl.style.fontFamily = "Franklin Gothic Medium";
  //userEl.appendChild(new1El);

})

function isAnagram(str1, str2) {
    // Convert to lowercase and remove spaces and special characters
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Convert to arrays, sort, and join back into strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return str1 === str2;
  }

  var button2El = document.getElementById("anagram-button");

  button2El.addEventListener("click", function(){
    var word1 = prompt("What is the first word?");
    var word2 = prompt("What is the second word?");
  
    var anagram = isAnagram(word1, word2);
  
      var anaEl = document.getElementById("extra");
    //create new h1 element
      var new1El = document.createElement("h1");
      var new2El = document.createElement("h1");
      var new3El = document.createElement("h1");
  
      new1El.innerHTML = "Word 1: " + word1;
      new2El.innerHTML = "Word 2: " + word2;
      if(anagram == true){
          new3El.innerHTML = "Are they anagrams? YES!";
          new3El.style.color = "green";
      }else{
          new3El.innerHTML = "Are they anagrams? Nope!";
          new3El.style.color = "red";
      }
      anaEl.appendChild(new1El);
      anaEl.appendChild(new2El);
      anaEl.appendChild(new3El);  
  });

  