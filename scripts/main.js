$(document).ready(function() { 
   $(".main-content").css({"max-width": "none"});
   $("body").css({"margin":"0px","padding":"0px","overflow":"hidden"});
   $("section").css({"margin":"0px","padding":"0px","overflow":"hidden"});
  $(".page-header").hide();
$(".site-footer").hide();
  
  $("#btn1").click(function () { 
  console.log("helo0");
  var name = $("#inpName").val();
    var link = "https://www.naamvidya.com/numerology/name-meaning/"+name+".html";
      

    $("#myIframe").attr("src", link);
    
     
});
  
 
});




$(window).on( "load", function() {
  $(".page-header").hide();
   $(".site-footer").hide();
  $(".main-content").css({"max-width": "none"});
    $("body").css({"margin":"0px","padding":"0px","overflow":"hidden"});
   $("section").css({"margin":"0px","padding":"0px","overflow":"hidden"});
});


