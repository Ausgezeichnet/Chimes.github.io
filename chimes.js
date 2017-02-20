// The variable timeVar sets the clock...
var timeVar = setInterval(timeFunc, 1000);
// and timeFunc runs it.
function timeFunc() {
    // Make a date 
    var date = new Date();
    // Print the time onto the screen
    document.getElementById("time-p").innerHTML = date.toLocaleTimeString();
}
$(document).ready(function () {
    $("#starttime").change(function () {
        console.log($("#starttime").val());
        console.log($("#endtime").val());
        if ($("#starttime").val() < $("endtime").val() ){
            $(window).alert("error");
        }
    });
    var ampm = ["AM", "PM"];
    var mins = ["00", "15", "30", "45"];
    var hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    for (var k = 0; k < 2; k++) {    
            for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 4; j++) {
                var timeToShow = hours[i] + ':' + mins[j] + " " + ampm[k];
                $("#starttime").append('<option value="' + timeToShow + '">' + timeToShow + '</option>');
                $("#endtime").append('<option value="' + timeToShow + '">' + timeToShow + '</option>');
            }
        }
    }
});