// Author: Miyuki Motose
// Date: 5/23/2023

//Figure out what house the name is in
function sortingHat(str){
  var length = str.length;
  var mod = length % 4;

  if(mod == 0){
    return "Gryffindor";
  }else if(mod == 1){
    return "Ravenclaw";
  }else if(mod == 2){
    return "Slytherin";
  }else if(mod == 3){
    return "Hufflepuff";
  }
}


$("#button").click(function(){

  // get name
  var name = $("#input").val();
  console.log(name);

  // get house
  var house = sortingHat(name);
  console.log(house);

  // add house to the output/house div
  $("#house").html("<h1 class='house'>" + "The sorting hat has sorted you into " + house + "</h1>");
  // if(house == "Gryffindor"){
  //   $("#house").append("<p class='Gryffindor'>You are strong and brave but kinda dumb");
  // }else if(house == "Ravenclaw"){
  //   $("#house").append("<p class='Ravenclaw'>You are GINORMOUS BRAIN but need to touch grass you nerd");
  // }else if(house == "Slytherin"){
  //   $("#house").append("<p class='Slytherin'>Bad guys, too smart for your own good, you baddie");
  // }else if(house == "Hufflepuff"){
  //   $("#house").append("<p class='Hufflepuff'>Loyal cinnamonbuns");
  // }
})



