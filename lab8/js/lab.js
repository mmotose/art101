// Author: Miyuki Motose
// Date: 5/8/2023

// Constants

var numbers = [4, 9, 16, 100, 121];

function calculate(x){
    var results = Math.sqrt(x);
    return results;
}

console.log("The square root of ", numbers[0], " is ", calculate(numbers[0]), ".");

console.log("The square root of ", numbers, " are ", numbers.map(calculate));

console.log("The double of the numbers are ", 
numbers.map(function(x){
    var results = x * 2;
    return results;
}));

//This is for Task X

var mapResults = numbers.map(function(x){
                    var results = x * 2;
                    return results; 
        });


var outputEl = document.getElementById("output"); 
outputEl.innerHTML = "The square root of " + numbers[0] + " is " + calculate(numbers[0]) + ". <br>" + 
                    "The square root of " + numbers + " are " + numbers.map(calculate) + ", respectively.</br>" +
                    "The double of the numbers are " + mapResults + ".";
