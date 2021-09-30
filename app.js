
let btn = $('button');
let socials = $("#popup");

let theDiv = document.getElementById("btnshare");

let content = document.createElement('button');
content.setAttribute('class', 'circle');
let img = document.createElement('img');
img.setAttribute('src', 'images/icon-share.svg');



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
});


content.click(function(){
    socials.toggle();
});


if ($(window).width() < 650) {
  theDiv.appendChild(content);
  theDiv.appendChild(img);

}
else {
   console.log('More than 960');
}
