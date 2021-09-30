let btn = $('button');
let socials = $("#popup");

btn.mouseover(function() {
  $('.share').css("filter", "brightness(0) invert(1)");
});

btn.mouseout(function() {
  $('.share').css("filter", "");
});


btn.click(function() {
  socials.toggle();
});
