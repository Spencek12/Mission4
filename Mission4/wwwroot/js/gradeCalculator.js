/*Function to receive inputs and calculate outputs*/
$("#btnSend").click(function () {

    //Receive percentages and weigh them
    var total = (parseInt($("#assignment").val()) * 0.5) +
        (parseInt($("#group_project").val()) * 0.1) +
        (parseInt($("#quiz").val()) * 0.1) +
        (parseInt($("#midterm").val()) * 0.1) +
        (parseInt($("#final").val()) * 0.1) +
        (parseInt($("#intex").val()) * 0.1)

    //Create variable to hold letter grade once determined
    var letterGrade = "";

    //Determine letter grade based on overall percentage
    if (total >= 94) {
        letterGrade = "A"
    } else if (total >= 90) {
        letterGrade = "A-"
    } else if (total >= 87) {
        letterGrade = "B+"
    } else if (total >= 84) {
        letterGrade = "B"
    } else if (total >= 80) {
        letterGrade = "B-"
    } else if (total >= 77) {
        letterGrade = "C+"
    } else if (total >= 74) {
        letterGrade = "C"
    } else if (total >= 70) {
        letterGrade = "C-"
    } else if (total >= 67) {
        letterGrade = "D+"
    } else if (total >= 64) {
        letterGrade = "D"
    } else if (total >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    total = total + "%"

    //Output to website
    $("#percent-grade").html(total)
    $("#letter-grade").html(letterGrade)
});