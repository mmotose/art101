// Author: Miyuki Motose
// Date: 5/24/2023

var oneLongString = "";

function fizzBuzzBoom(){
  
  for (i=1; i<=200; i++) {
    
// If i is divisible by certain numbers, output certain lines
    if (i%105 == 0) {
      oneLongString += i + " - FizzBuzzBoom!<br>";
    }else if (i%35== 0) {
      oneLongString += i + " - BuzzBoom!<br>";
    }else if (i%21 == 0) {
      oneLongString += i + " - FizzBoom!<br>";
    }else if (i%15 == 0) {
      oneLongString += i + " - FizzBuzz!<br>";
    }else if (i%7 == 0) {
      oneLongString += i + " - Boom!<br>";
    }else if (i%5 == 0) {
      oneLongString += i + " - Buzz!<br>";
    }else if (i%3 == 0) {
      oneLongString += i + " - Fizz!<br>";
    } else {
      oneLongString += i + "<br>";
    }
  }
  return oneLongString;
  
}


$("#output").append(fizzBuzzBoom());








// var oneLongString = "";

// function fizzBuzzBoom(maxNums){
  
//   for (i=1; i<=maxNums; i++) {
    
// // If i is divisible by certain numbers, output certain lines
//     if (i%105 == 0) {
//       oneLongString += i + " - FizzBuzzBoom!<br>";
//     }else if (i%35== 0) {
//       oneLongString += i + " - BuzzBoom!<br>";
//     }else if (i%21 == 0) {
//       oneLongString += i + " - FizzBoom!<br>";
//     }else if (i%15 == 0) {
//       oneLongString += i + " - FizzBuzz!<br>";
//     }else if (i%7 == 0) {
//       oneLongString += i + " - Boom!<br>";
//     }else if (i%5 == 0) {
//       oneLongString += i + " - Buzz!<br>";
//     }else if (i%3 == 0) {
//       oneLongString += i + " - Fizz!<br>";
//     } else {
//       oneLongString += i + "<br>";
//     }
//   }
//   return oneLongString;
  
// }


// $("#button").click(function(){
//   var max = $("#input").val();
//   $("#output").append(fizzBuzzBoom(max));
// });