$(document).ready(function() { 
  $(".page-header").hide();
$(".site-footer").hide();
  
  
 
});

$("#button").click(function () { 
  console.log("helo");
  var name = $("#inpName").val();
    $("#frame").attr("src", "https://www.naamvidya.com/numerology/name-meaning/"+name);
});


$(window).on( "load", function() {
  $(".page-header").hide();
   $(".site-footer").hide();
});
/*
$().load(function() { 
$(".page-header").hide();
   $(".site-footer").hide();
});*/
