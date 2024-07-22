# Adding based on product id

```js
// Array of product Ids that you want to apply the change
products = [
  16430, 16431, 16432, 16433, 16434, 16435, 16436, 16437, 16438, 16936, 16937,
  16938, 16939, 16940, 16941, 16942, 16943, 16944,
];

// Stopping for applying twice
if (this.querySelector(".your-product-css")) return;

// Find the element that contains the product id on a href or other attribute
target = this.querySelector("div.product-results-list article div.content a");

// Find the product ID
id = target.getAttribute("href").replace(/^https.+\/(\d+)\/$/gi, "$1") * 1;

// If the product is not in the list, stop
if (!products.includes(id)) return;

// Inserting the element
target.insertAdjacentHTML(
  "afterBegin",
  `

<div 
    class="other-css your-product-css" 
    style="background-color: #666666; color: #fff;">
    <span>Something</span>
    <span class="after" style="border-left-color: #ffff;"></span>
</div>


`
);
```
