// Open the Modal
function openModal() {
  document.getElementById("stsp__modal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("stsp__modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("stsp__modal__slides");
  var dots = document.getElementsByClassName("stsp__modal__demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" stsp__modal__active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " stsp__modal__active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
const imagesArray = [
  {
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGxpdmluZyUyMHJvb218ZW58MHx8fHwxNjI5NjUzODQ0&ixlib=rb-1.2.1&q=80&w=400",
    title: "1",
  },
  {
    url: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    title: "2",
  },
  {
    url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGxpdmluZyUyMHJvb218ZW58MHx8fHwxNjI5NjUzODQ0&ixlib=rb-1.2.1&q=80&w=400",
    title: "3",
  },
  {
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGxpdmluZyUyMHJvb218ZW58MHx8fHwxNjI5NjUzODQ0&ixlib=rb-1.2.1&q=80&w=400",
    title: "4",
  },
];
