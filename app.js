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


//
// $('button').click(function()
// { document.getElementById('popup').style.visibility = "visible";
// });


$("button").click(function(){
    $("#popup").toggle();
});
