$(document).ready(function() { 
  $(".page-header").hide();
$(".site-footer").hide();
  
  var name = $("#inpName").val();
  alert(name);
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
