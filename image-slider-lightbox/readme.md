# Slider Lightbox Example

## --- Vartiations ---

### 1. CSS

```css
.stsp__container__row > .stsp__container__column {
  padding: 0 8px;
}

.stsp__container__row::after {
  content: "";
  display: table;
  clear: both;
}

/* Create four equal columns that floats next to each other */
.stsp__container__thumbnail-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  height: 200px;
  gap: 10px;
  align-items: center;
  overflow: hidden;
}

.stsp__container__thumbnail-container img {
  width: 100%;
  object-fit: cover;
  min-height: 250px;
}

.stsp__container__column {
  float: left;
  width: 100%;
}

/* The Modal (background) */
.stsp__modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.stsp__modal__content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 60%;
  max-width: 1200px;
}

/* The Close Button */
.stsp__modal__close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.stsp__modal__close:hover,
.stsp__modal__close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Hide the slides by default */
.stsp__modal__slides {
  display: none;
}

/* Next & previous buttons */
.stsp__modal__prev,
.stsp__modal__next {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 100%;
  width: auto;
  padding: 20px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.stsp__modal__next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.stsp__modal__prev:hover,
.stsp__modal__next:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Number text (1/3 etc) */
.stsp__modal__numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Caption text */
.stsp__modal__caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.stsp__modal__demo-container {
  z-index: 10;
  width: 100%;
  position: fixed;
  bottom: 80px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.stsp__modal__demo-container .stsp__modal__item {
  min-height: 100px;
}

img.stsp__modal__demo {
  object-fit: cover;
  min-height: 100%;
  max-width: 100px;
  opacity: 0.6;
}

.stsp__modal__active,
.stsp__modal__demo:hover,
.stsp__modal__demo.stsp__modal__active {
  opacity: 1;
  border: 1px solid white;
}

img.stsp__modal__hover-shadow {
  transition: 0.3s;
}

.stsp__modal__hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: scale(0.95);
}
```

### 2. Modal Slider Functionality

```js
/* Change the content of this array to your images */
window.stspImagesArray = [
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

  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(
      " stsp__slides__active",
      ""
    );
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" stsp__modal__active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].className += " stsp__slides__active";
  dots[slideIndex - 1].className += " stsp__modal__active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
```

### 3. Insert the HTML container

<em>Client side</em>

##### Selector

Put the selector you want here

```
.element-after-or-before-the-spot-you-want-to-insert-the-lightbox
```

##### Javascript

```js
if (document.querySelector(".stsp__container")) return;

this.insertAdjacentHTML(
  "beforebegin",
  `

    <div class="stsp__container">
      And <!-- Images used to open the lightbox -->
      <div class="stsp__container__row stsp__container__thumbnail-container">
       
      </div>

      <!-- The Modal/Lightbox -->
      <div id="stsp__modal" class="stsp__modal">
        <span class="stsp__modal__close cursor" onclick="closeModal()"
          >&times;</span
        >
        <div class="stsp__modal__content">
          

          <!-- Next/previous controls -->
          <a class="stsp__modal__prev" onclick="plusSlides(-1)"
            ><span>&#10094;</span></a
          >
          <a class="stsp__modal__next" onclick="plusSlides(1)"
            ><span>&#10095;</span></a
          >

          <!-- Caption text -->
          <div class="stsp__modal__caption-container">
            <p id="caption"></p>
          </div>
        </div>
        <!-- Thumbnail image controls -->
        <div class="stsp__modal__demo-container">
          
        </div>
      </div>
    </div>
`
);
```

### 4. Injecting the images for the thumbnail container

<em>Client side</em>

##### Selector

```
.stsp__container__thumbnail-container
```

##### Javascript

```js
window.stspImagesArray.forEach((img) => {
  this.insertAdjacentHTML(
    "beforeend",
    `

     <div class="stsp__container__column">
          <img
            src=${img.url}
            onclick="openModal();currentSlide(1)"
            class="stsp__modal__hover-shadow"
          />
    </div>
`
  );
});
```

### 6. Injecting the images for the modal preview items

<em>Client side</em>

##### Selector

```
.stsp__modal__demo-container
```

##### Javascript

```js
window.stspImagesArray.forEach((img) => {
  this.insertAdjacentHTML(
    "beforeend",
    `

           <div class="stsp__modal__item">
            <img
              class="stsp__modal__demo"
              src=${img.url}
              onclick="currentSlide(1)"
              alt="Nature"
            />
          </div>

`
  );
});
```

### 7. Closing modal by clicking overlay

<em>Client side</em>

##### Selector

```
#stsp__modal
```

##### Javascript

```js
document.querySelector("#stsp__modal").addEventListener("click", (event) => {
  if (!event.target.closest(".stsp__modal__content")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  const slide = document.querySelector(
    ".stsp__modal__slides.stsp__slides__active"
  );
  if (slide && event.key === "Escape") {
    closeModal();
  }
});
```

### 8. Sliding with arrows

<em>Client side</em>

##### Selector

```
#stsp__modal
```

##### Javascript

```js
document.addEventListener("keydown", (event) => {
  const slide = document.querySelector(
    ".stsp__modal__slides.stsp__slides__active"
  );
  if (slide && event.key === "ArrowLeft") {
    const prevArrow = document.querySelector(".stsp__modal__prev");
    prevArrow.click();
  } else if (slide && event.key === "ArrowRight") {
    const nextArrow = document.querySelector(".stsp__modal__next");
    nextArrow.click();
  }
});
```

`0
