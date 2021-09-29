// document.getElementById('popup').style.visibility = "hidden";

// $('button').click(function()
// {
//      console.log('itworks');
// });




$('button').mouseover(function()
{
   $('.share').css("filter", "brightness(0) invert(1)" );
});

$('button').mouseout(function()
{
  $('.share').css("filter", "");
});



$("button").click(function(){
    $("#popup").toggle();
});


if ($(window).width() < 650) {

   alert('Less than 650');

}
else {
   alert('More than 960');
};
