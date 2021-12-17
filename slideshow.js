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
  setTimeout(showSlides, 4500);
}
// window.onload = function() {
//     var canvas,ctx 
//     canvas = document.getElementsByTagName("body")
//     ctx = canvas.getContext("2d")

//     ctx.beginPath()
//     ctx.fillStyle = rgba(0,0,0,0.5)
//     ctx.fillRect(0,0,canvas.width,canvas.height)
//     ctx.closePath()
// }