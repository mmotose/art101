// Author: Miyuki Motose
// Date: 5/18/2023


$(".sectionbox").append("<button class='my-button'>Toggle Button</button>");

$(".my-button").click(function(){
  $(this).parent().toggleClass("special");
});

