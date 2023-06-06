// Author: Miyuki Motose
// Date: 6/05/2023

function returnStuff(){
  console.log("Clicked!");
  $.ajax({
    url: "https://yesno.wtf/api",
    type: "GET",
    data: {},

  })
    .done(function(data){
      var answer = data.answer;
      var imgUrl = data.image;
      $("#innerOutput").html("<h2>" + answer);
      $("#innerOutput").append("<img src= " + imgUrl + ">");

    })

}

$("#activate").click(returnStuff);


