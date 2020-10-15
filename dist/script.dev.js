"use strict";

var btn = document.getElementById("btn");
{
  btn.addEventListener("click", function () {
    document.body.style.background = randomBg();
  });
}

function randomBg() {
  return "hsl(".concat(Math.floor(Math.random() * 360), ",100%,50%)");
}