(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (REDUCED) {
    return;
  }

  var heroElements = document.querySelectorAll(
    ".hero > :not(.contacts)"
  );

  heroElements.forEach(function (el) {
    el.classList.add("rise");
  });

  Array.prototype.forEach.call(heroElements, function (el, i) {
    setTimeout(function () {
      el.classList.add("animate");
    }, i * 80);
  });
})();
