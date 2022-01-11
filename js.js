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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshowSlides1");
  var dots = document.getElementsByClassName("dotslideshow1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeslideshow1", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeslideshow1";
}

var slideColectionIndex = 1;
colectionSlides(slideColectionIndex);

// Next/previous controls
function colectionPlusSlides(n) {
  colectionSlides(slideColectionIndex += n);
}

// Thumbnail image controls
function colectionCurrentSlide(n) {
  colectionSlides(slideColectionIndex = n);
}

function colectionSlides(n) {
  var i;
  var colectionSlides = document.getElementsByClassName("colection1slides");
  var colectionDots = document.getElementsByClassName("colection1dot");
  if (n > colectionSlides.length) {slideColectionIndex = 1}
  if (n < 1) {slideColectionIndex = colectionSlides.length}
  for (i = 0; i < colectionSlides.length; i++) {
    colectionSlides[i].style.display = "none";
  }
  for (i = 0; i < colectionDots.length; i++) {
    colectionDots[i].className = colectionDots[i].className.replace(" colection1active", "");
  }
  colectionSlides[slideColectionIndex-1].style.display = "block";
  colectionDots[slideColectionIndex-1].className += " colection1active";
}

function showModal(name) {
  var modalname = name;
  modalname.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modalname) {
      modalname.style.display = "none";
    }
  };
}

function closeModal(name) {
  // When the user clicks on <span> (x), close the modal
  var modalname = name;
  modalname.style.display = "none";
  };

  $(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

//------for qty increasment or dicreasment

var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1 );
    update_amounts();
});
var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }
    update_amounts();
});


