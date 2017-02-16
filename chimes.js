// Do all initialization inside of the document.ready
$(document).ready(function () {
    // Take the work we did in textbox "#important" from last time and save it in there 
    $("#workspace").val(localStorage.getItem("isAwesome"));
    // The click handler for the saving button
    $('#save-btn').click(function () {
        // Tell it what to save...
        localStorage.setItem("isAwesome", $("#workspace").val());
        //...and print it
        console.log(localStorage.getItem("isAwesome"));
    });
    // Set the audio variable
    var audio = $("#audio")[0];
    // The click handler for the audio button
    $('#audio-btn').click(function () {
        // Tell it to play "audio"
        audio.play();
    });
    $('#test-btn').click(function () {
        setTimeout(testFunc, 3000);
    });
     $('#btn1').click(function () {
        clearInterval(timeVar);
    });
     $('#btn2').click(function () {
        timeVar = setInterval(timeFunc, 1000);
    });
});
function testFunc() {
    alert('*bzzzzzzzzzzzzzz* WORKS *bzz*');
}
var timeVar = setInterval(timeFunc, 1000);

function timeFunc() {
    var date = new Date();
    document.getElementById("time-p").innerHTML = date.toLocaleTimeString();
}