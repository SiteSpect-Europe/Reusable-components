# Snowflake Example

## --- Vartiations ---

### 1. CSS

```css
#snow-container {
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: opacity 500ms;
  width: 100%;
}

.snow {
  animation: fall ease-in infinite, sway ease-in-out infinite;
  color: skyblue;
  position: absolute;
}

@keyframes fall {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100vh;
    opacity: 1;
  }
}

@keyframes sway {
  0% {
    margin-left: 0;
  }
  25% {
    margin-left: 50px;
  }
  50% {
    margin-left: -50px;
  }
  75% {
    margin-left: 50px;
  }
  100% {
    margin-left: 0;
  }
}
```

### 2.Inserting the HTML before and of body

#### - Search

```HTML
</body>
```

#### - Replace

```HTML
<div id="snow-container" title="Click anywhere to remove snow"></div>
</body>
```

### 3.Script / Functionality

```js
const snowContainer = document.getElementById("snow-container");
const snowContent = ["&#8364", "&#8364", "&#10054"]; // the snowflake shape

// Random number
const random = (num) => {
  return Math.floor(Math.random() * num);
};

// Random styles for size and duration and position on screen
const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
};

// Creating the snowflake elements based on number given
const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
};

const removeSnow = () => {
  snowContainer.style.opacity = "0";
  setTimeout(() => {
    snowContainer.remove();
  }, 500);
};

// onLoad create the snow for 60 sec
window.addEventListener("load", () => {
  createSnow(30);
  setTimeout(removeSnow, 1000 * 60);
});

// if someone clicks on screen snow disappears
window.addEventListener("click", () => {
  removeSnow();
});
```
