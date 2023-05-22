//Array of Nature Slideshow//

let slideIndex = [1,2,3,4];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlide1", "mySlide2", "mySlide3", "mySlide4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(2,2);
showSlides(3,3);
showSlides(4,4);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}