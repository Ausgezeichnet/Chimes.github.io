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

});
function robot() {
    alert('*bzzzzzzzzzzzzzz* WORKS *bzz*');
}