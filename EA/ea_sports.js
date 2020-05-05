//alternative for colorchange of user and help icon 

// var change=document.querySelector("#help");

// change.addEventListener("mouseover", function(){
// change.style.color = "#ADFF2F";});

// change.addEventListener("mouseout", function(){ 
// change.style.color = "white";});

// var user=document.querySelector("#usercolor");

// user.addEventListener("mouseover", function(){
// user.style.color = "#ADFF2F";});

// user.addEventListener("mouseout", function(){ 
// user.style.color = "white";});

var sizeTheOverlays = function() {
    $(".overlay1").resize().each(function() {
    var h = $(this).parent().outerHeight();
    var w = $(this).parent().outerWidth();
    $(this).css("height", h);
    $(this).css("width", w);
  });
};

sizeTheOverlays();


var width = $(window).width();
$(window).resize(function(){
   if($(this).width() != width){
      width = $(this).width();
      sizeTheOverlays();
   }
});


