// JavaScript source code
function updateClock() { 
// Current date time
var currentTime = new Date();

// Get the current time
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();

// Append a zero if min are less than 10
currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

// Create string of time
var currentTimeString = currentHours + ":" + currentMinutes;

// Display time in div
document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}