
$('button').click(function()
{
     console.log('itworks');
});

$('button').mouseover(function()
{
   $('.share').css("filter", "brightness(0) invert(1)" );
});

$('button').mouseout(function()
{
  $('.share').css("filter", "");
});

//
// $('button').mouseover(function()
// {
//   $('.share').addClass(".sharehover");
// }).mouseout(function(){
//   $('.share').removeClass(".sharehover");
// });
