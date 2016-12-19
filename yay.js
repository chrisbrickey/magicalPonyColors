function magicalPonyColors(element, bgColor, txtColor) {
  element.style["background-color"] = bgColor;
  element.style["color"] = txtColor;
}

document.addEventListener("DOMContentLoaded", function(event) {
  var body = document.getElementsByTagName("body")[0];

  magicalPonyColors(body, "pink", "red");
});

console.log("See my magical pony colors! yay!!");


//
// function magicalPonyColors(bgColor, txtColor) {
//
//   document.getElementsByTagName("body")[0].style["background-color"] = bgColor;
//   document.getElementsByTagName("body")[0].style["color"] = txtColor;
// }
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   magicalPonyColors("pink", "red");
// });
//
// console.log("See my magical pony colors!");
