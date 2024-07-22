# Mobile sticky button

## --- Variations ---

### 1. CSS

```css
body[data-visibility-attribute="visible"] #stsp__sticky-button {
  transform: translateY(150px);
  transition: transform 1s ease;
}

body[data-visibility-attribute="hidden"] #stsp__sticky-button {
  transform: translateY(-150px);
  transition: transform 1s ease;
}

#stsp__sticky-button {
  position: fixed;
  bottom: -155px;
  right: 0;
  left: 0;
  color: white !important;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  z-index: 500;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 30px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 38%,
    rgba(255, 255, 255, 1) 100%
  );
}

#stsp__sticky-button .btn-2--magenta:hover:before {
  background-color: #e60051 !important;
  color: #fff !important;
}

#stsp__sticky-button .btn-2--magenta:hover:after {
  background-color: #e60051 !important;
  color: #fff !important;
}

#stsp__sticky-button .btn-2--magenta:hover {
  color: #fff !important;
}

.launcher-container,
.icon.icon--message.trengo-chat-button {
  z-index: 600 !important;
}

#stsp__sticky-button button {
  width: 70%;
}

#stsp__sticky-button div {
  color: white !important;
  display: flex;
}
```

### 2. Setting attribute based on Observer

##### Selector

```
.c-prefill-form-new__submit
```

##### JavaScript

```js
((t, a) => {
  new IntersectionObserver(
    function (e) {
      e.forEach((i) =>
        document.body.setAttribute(
          "data-visibility-" + a,
          i.isIntersecting ? "visible" : "hidden"
        )
      );
    },
    {
      rootMargin: "-100px 0px 0px 0px",
    }
  ).observe(typeof t === "string" ? document.querySelector(t) : t);
})(this, "attribute");
```

### 3. Insert sticky button

##### Standard insert in the end of the body

```html
<div id="stsp__sticky-button">
  <button
    class="btn-2 btn-2--right-skew btn-2--right-skew--inverse btn-2--magenta"
  >
    Verzekeringen vergelijken
    <img
      src="https://www.alpina.nl/wp-content/themes/alpina/assets/src/images/icons/icon-arrow-right-white.svg"
      alt="icon"
      height="16"
      width="16"
    />
  </button>
</div>
```

### 4. Scroll to form smoothly

##### Selector

```
#stsp__sticky-button

```

##### JavaScript

```js
this.addEventListener("click", function () {
  const ctaForm = document.querySelector(".c-prefill-form-new");
  ctaForm.scrollIntoView({ behavior: "smooth" });
});
```

### 5. Change the text on the button based on another element

##### Selector

```
.c-prefill-form-new button
```

##### JavaScript

```js
document.querySelector("#stsp__sticky-button button").innerHTML =
  this.innerHTML;
```
