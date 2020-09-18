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
    
    // Changing the background using template literals
    colorBackground.style.backgroundColor = `rgba(${redColor.value}, ${greenColor.value}, ${blueColor.value}, ${opacity.value/100})`;

    // Changing the text background using template literals
    textBackground.textContent = `rgba  (${redColor.value}, ${greenColor.value}, ${blueColor.value}, ${opacity.value/100})`

}
})