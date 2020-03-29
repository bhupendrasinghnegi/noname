$(document).ready(function() { 
  $(".page-header").hide();
$(".site-footer").hide();
  
  $("#btn1").click(function () { 
  console.log("helo0");
  var name = $("#inpName").val();
    var link = "https://www.naamvidya.com/numerology/name-meaning/"+name+".html";
    console.log(link);
   // $('#msgDiv').load('/demo.html #myHtmlContent');
//$('#msgDiv').load(link+' #htmlbind');

    $("#frame").attr("src", link);
    
     console.log($('.row').contents());//.find('#red').hide();
    console.log($('#iframe').find("body");
});
  
 
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
