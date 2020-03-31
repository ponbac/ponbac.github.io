$(document).ready(function () {
    // Get value on button click and show alert
    $("#submitButton").click(function () {
        submit();
    });

    $("#nameField").on('keyup', function (e) {
        if (e.keyCode === 13) {
            submit()
        }
    });

    $("#ipField").on('keyup', function (e) {
        if (e.keyCode === 13) {
            submit()
        }
    });
});

function submit() {
    var ip = $("#ipField").val();
    var name = $("#nameField").val();
    console.log("IP: " + ip);

    if (ip.length > 3) {
        window.location.replace("/main?ip=" + ip + "&name=" + name);
    } else {
        alert("Enter a valid IP-address!");
    }
}