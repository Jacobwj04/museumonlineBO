var slideExhibitionIndex = 1;
exhibitionSlides(slideExhibitionIndex);

// Next/previous controls
function exhibitionPlusSlides(n) {
  exhibitionSlides(slideExhibitionIndex += n);
}

// Thumbnail image controls
function exhibitionCurrentSlide(n) {
  exhibitionSlides(slideExhibitionIndex = n);
}

function exhibitionSlides(n) {
  var i;
  var exhibitionSlides = document.getElementsByClassName("exhibition1slides");
  var exhibitionDots = document.getElementsByClassName("exhibition1dot");
  if (n > exhibitionSlides.length) {slideExhibitionIndex = 1} 
  if (n < 1) {slideExhibitionIndex = exhibitionSlides.length}
  for (i = 0; i < exhibitionSlides.length; i++) {
    exhibitionSlides[i].style.display = "none"; 
  }
  for (i = 0; i < exhibitionDots.length; i++) {
    exhibitionDots[i].className = exhibitionDots[i].className.replace(" exhibition1active", "");
  }
  exhibitionSlides[slideExhibitionIndex-1].style.display = "block"; 
  exhibitionDots[slideExhibitionIndex-1].className += " exhibition1active";
}
