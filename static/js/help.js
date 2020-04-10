$(document).ready(function () {
    // Get value on button click and show alert
    $("#backButton").click(function () {
        goBack();
    });
});

function goBack() {
    window.history.back();
}