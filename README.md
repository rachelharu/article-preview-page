# Frontend Mentor - Article preview component 


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


### Links

- Live Site URL: [https://article-preview-page.vercel.app/]

 
### Built with

-HTML, CSS, Javascript



### What I learned

some code that I am proud of is this javascript: 
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

 

 
