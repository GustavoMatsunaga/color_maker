// Preventing that javascript loads anything before the page load
window.addEventListener("load", () => {

// Colors from Range Inputs
var color = colorsGet();

// Text for colors

var textColor = textColorsGet();

// Background color

var background = backgroundGet();

// Event listener for the input ranges
color.red.addEventListener("input", eventColorChange);
color.green.addEventListener("input", eventColorChange);
color.blue.addEventListener("input", eventColorChange);
color.opacity.addEventListener("input", eventColorChange);



function eventColorChange(){
    // Adding the values to the input text
    textColor.red.value = color.red.value
    textColor.green.value = color.green.value
    textColor.blue.value = color.blue.value
    textColor.opacity.value = color.opacity.value;

    // Var RGBA in a variable
    var rgba = `rgba(${color.red.value}, ${color.green.value}, ${color.blue.value}, ${color.opacity.value/100})`;
    
    // Changing the background using template literals
    background.main.style.backgroundColor = rgba;

    // Changing the text background using template literals
    background.text.textContent = rgba

    // Changing the text background using template literals
    background.hex.textContent = rgba2hex(rgba);

    // Changing the slider background
    var sliderColor = changeSlider(color);
    color.red.style.background = sliderColor.red;
    color.green.style.background = sliderColor.green;
    color.blue.style.background = sliderColor.blue;
    color.opacity.style.background = sliderColor.opacity;
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

function changeSlider (color) {
  var sliderColor = {

    red: `linear-gradient(90deg, rgb(128, 128, 128) 0%, rgba(${color.red.value}, 0, 0, ${color.opacity.value/100}) ${(color.red.value*100)/255}%, rgb(128, 128, 128) ${(color.red.value*100)/255}%, rgb(128, 128, 128)100%)`,

    green: `linear-gradient(90deg, rgb(128, 128, 128) 0%, rgba(0, ${color.green.value}, 0, ${color.opacity.value/100}) ${(color.green.value*100)/255}%, rgb(128, 128, 128) ${(color.green.value*100)/255}%, rgb(128, 128, 128)100%)`,

    blue: `linear-gradient(90deg, rgb(128, 128, 128) 0%, rgba(0, 0, ${color.blue.value}, ${color.opacity.value/100}) ${(color.blue.value*100)/255}%, rgb(128, 128, 128) ${(color.blue.value*100)/255}%, rgb(128, 128, 128)100%)`,

    opacity: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${color.opacity.value/100}) ${color.opacity.value}%, rgba(0, 0, 0, ${color.opacity.value/100}) ${color.opacity.value}%, rgb(128, 128, 128)100%)`

  }
  return sliderColor;
}


function colorsGet () {
  var color = {
    red: document.querySelector("#color-red"),
    green: document.querySelector("#color-green"),
    blue: document.querySelector("#color-blue"),
    opacity: document.querySelector("#opacity")
  }
  return color;
}

function textColorsGet () {
  var textColor = {
    red : document.querySelector(".text-color-red"),
    green : document.querySelector(".text-color-green"),
    blue : document.querySelector(".text-color-blue"),
    opacity : document.querySelector(".text-opacity")
  }
  return textColor ;
}

function backgroundGet () {
  var background = {
    main : document.querySelector(".card-background-color"),
    text : document.querySelector(".card-background-text"),
    hex : textBackgroundHex = document.querySelector("#hex")
  }
  return background ;
}