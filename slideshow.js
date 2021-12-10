var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}
let ctx,canvas;
canvas.width = 1000;
canvas.height = 600;
canvas = document.getElementById("slideshow");
ctx = canvas.getContext("2d");
function draw() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(51,51,51,0.5)";
    ctx.fillRect(0,canvas.height-18,canvas.width,18)
    ctx.fill();
    ctx.closePath()
}
draw();