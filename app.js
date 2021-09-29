// document.getElementById('popup').style.visibility = "visible";

// $('button').click(function()
// {
//      console.log('itworks');
// });

let btn = $('button');
let socials = $("#popup");

let theDiv = document.getElementById("btnclick");
let content = document.createTextNode('<button class="circle"><img class="share" src="images/icon-share.svg"></button>');

btn.mouseover(function()
{
   $('.share').css("filter", "brightness(0) invert(1)" );
});

btn.mouseout(function()
{
  $('.share').css("filter", "");
});


btn.click(function(){
    socials.toggle();
    theDiv.appendChild(content);
});





// if ($(window).width() < 650) {
//
//
//
//    alert('Less than 650');
//
//
// }
// else {
//    alert('More than 960');
// }
