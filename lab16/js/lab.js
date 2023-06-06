// Author: Miyuki Motose
// Date: 6/05/2023

  $.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      var title = comicObj.title;
      var imgUrl = comicObj.img;
      var altText = comicObj.alt;

      $("#innerOutput").html("<h2>" + title);
      $("#innerOutput").append("<img src= " + imgUrl + ">");
      $("#innerOutput").append("<h2>" + altText);
    }
  })

