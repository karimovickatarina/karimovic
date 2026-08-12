function myFunction() {
var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav" ;
    }
}

   (function() {
      let slideIndex = 0;
      function showSlides() {
         const slides = document.querySelectorAll('.slideshow .slide');
         if (!slides.length) return;
         slides.forEach(slide => slide.classList.remove('active'));
         slideIndex = (slideIndex + 1) % slides.length;
         slides[slideIndex].classList.add('active');
      }
      setInterval(showSlides, 4000);
   })();