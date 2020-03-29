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

    $("#myIframe").attr("src", link);
    
     console.log($('.row').contents());//.find('#red').hide();
    console.log($('#myIframe').find("body"));
});
  
 
});




$(window).on( "load", function() {
  $(".page-header").hide();
   $(".site-footer").hide();
});

$(function(){
    $('#myIframe').ready(function(){
      alert("myIframe loaded");
        //your code (will be called once iframe is done loading)
    });
});
