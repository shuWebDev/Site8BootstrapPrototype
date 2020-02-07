import 'bootstrap';

// NOTE: a method of waiting until the page is ready to start Foundation...
// may not be needed in bootstrap as we might not need something like an Equalizer?
// columns might all be equal by default.
const ready = function(fn) {
  if(typeof fn !== "function") {
    return;
  }
  if(document.readyState === "complete") {
    return fn();
  }
  document.addEventListener("DOMContentLoaded", fn, false);
};

ready(function() {
  let p = document.createElement("p");
  p.innerHTML = "Test Message";
  document.querySelector("body").appendChild(p);
  testFunction();
});

function testFunction() {
  console.log("This is a test.");
}