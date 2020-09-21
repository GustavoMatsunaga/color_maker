// Preventing that javascript loads anything before the page load
window.addEventListener("load", () => {

// Colors from Range Inputs

var redColor = document.querySelector("#color-red")
var greenColor = document.querySelector("#color-green")
var blueColor = document.querySelector("#color-blue")
var opacity = document.querySelector("#opacity")

// Text for colors

var redText = document.querySelector(".text-color-red")
var greenText = document.querySelector(".text-color-green")
var blueText = document.querySelector(".text-color-blue")
var opacityText = document.querySelector(".text-opacity")

// Background color

var colorBackground = document.querySelector(".card-background-color")
var textBackground = document.querySelector(".card-background-text")
var textBackgroundHex = document.querySelector("#hex")

// Event listener for the input ranges
redColor.addEventListener("change", eventColorChange);
greenColor.addEventListener("change", eventColorChange);
blueColor.addEventListener("change", eventColorChange);
opacity.addEventListener("change", eventColorChange);

function eventColorChange(){
    // Adding the values to the input text
    redText.value = redColor.value
    greenText.value = greenColor.value
    blueText.value = blueColor.value
    opacityText.value = opacity.value;

    // Var RGBA in a variable
    var rgba = `rgba(${redColor.value}, ${greenColor.value}, ${blueColor.value}, ${opacity.value/100})`;
    
    // Changing the background using template literals
    colorBackground.style.backgroundColor = rgba;

    // Changing the text background using template literals
    textBackground.textContent = rgba

    // Changing the text background using template literals
    textBackgroundHex.textContent = rgba2hex(rgba)
}


function rgba2hex(orig) {
  // Function to transform RGBA to HEX

  var a, isPercent,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 01;
  }
  // multiply before convert to HEX
  a = ((a * 255) | 1 << 8).toString(16).slice(1)
  hex = `#${hex}${a}`;

  return hex;
}
})
