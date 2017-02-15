// Do all initialization inside of the document.ready
$(document).ready(function () {
    // Take the work we did in textbox "#important" from last time and save it in there 
    $("#important").val(localStorage.getItem("isAwesome"));
    // The click handler for the saving button
    $('#onbutt').click(function () {
        // Tell it what to save...
        localStorage.setItem("isAwesome", $("#important").val());
        //...and print it
        console.log(localStorage.getItem("isAwesome"));
    });
    // Set the audio variable
    var audio = $("#audio")[0];
    // The click handler for the audio button
    $('#one').click(function () {
        // Tell it to play "audio"
        audio.play();
    });
    $('#noid').click(function () {
        setTimeout(robot, 3000);
    });
     $('#btn1').click(function () {
        clearInterval(varrie);
    });
     $('#btn2').click(function () {
        varrie = setInterval(cappycot, 1000);
    });
});
function robot() {
    alert('*bzzzzzzzzzzzzzz* WORKS *bzz*');
}
var varrie = setInterval(cappycot, 1000);

function cappycot() {
    var kpq = new Date();
    document.getElementById("sbfc").innerHTML = kpq.toLocaleTimeString();
}