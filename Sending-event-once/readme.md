# Sending an event once - prevent clicking many times

## AET example

```js
// Pushing an event only when isAlreadySending is not true. Setting 5 sec safety net.
window._stsp = window._stsp || [];
window._stsp.push({
  selector: '[data-component="view-panel-toggle"]',
  event: "hamburger-opened",
  filter: function () {
    return !window.isAlreadySending;
  },
  start: function () {
    window.isAlreadySending = true;
    setTimeout(() => {
      delete window.isAlreadySending;
    }, 5000);
  },
});
```

```js
// Pushing an event only when isAlreadySending is not true. Setting 5 sec safety net.
window._stsp = window._stsp || [];
window._stsp.push({
  selector: '[data-component="view-panel-toggle"]',
  event: "hamburger-opened",
  filter: function ($node) {
    return !$node.isAlreadySending;
  },
  start: function ($node) {
    $node.isAlreadySending = true;
    setTimeout(() => {
      delete $node.isAlreadySending;
    }, 5000);
  },
});
```
