let slideIndex1 = 1;
showSlides(slideIndex1);

function plusSlides(n) {
  showSlides(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides(slideIndex1 = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("firekant1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active1";
}