// The variable timeVar sets the clock...
var timeVar = setInterval(timeFunc, 1000);
// and timeFunc runs it.
function timeFunc() {
    // Make a date 
    var date = new Date();
    // Print the time onto the screen
    document.getElementById("time-p").innerHTML = date.toLocaleTimeString();
}
// Step 1: Figure out how to add an option to a select using JQuery
// Step 2: Use a for loop to make the start and stop selects