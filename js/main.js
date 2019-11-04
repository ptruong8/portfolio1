//Phuc Truong
//June 23, 2019
//Javascript use to control the interactions of the slideshow
//The variable "slideIndex" keeps track of the number of slide
var slideIndex = 1;
//displaySlide display the slide according to the slideIndex
displaySlide(slideIndex);
//A function that controls the arrows of the slideshow
function arrow(slideNumber) {
  displaySlide(slideIndex += slideNumber);
}
//A function that tracks the current slide
function current(slideNumber) {
  displaySlide(slideIndex = slideNumber);
}
//A function that displays the slide
function displaySlide(slideNumber) {
  var slide = document.getElementsByClassName("slide");
  var indicator = document.getElementsByClassName("indicator");
  if (slideNumber > slide.length) {
  	slideIndex = 1;
  }
  if (slideNumber < 1) {
  	slideIndex = slide.length;
  }
  for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  //for loop that replaces the class name to "active" to show that the current slide is displayed for the indicator.
  for (var i = 0; i < indicator.length; i++) {
      indicator[i].className = indicator[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";
  indicator[slideIndex-1].className += " active";
} 

