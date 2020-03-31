let start_time = Date.now();
let volume_level = 20;
let last_sent = 0;

$('#np-volume').on('input propertychange', async function () {
    volume_level = (($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))) * 100;
    start_time = Date.now();

    $('#volume-progressbar').css('background',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + 0 + ', #D57D67), '
        + 'color-stop(' + volume_level / 100 + ', #EDB472), '
        + 'color-stop(' + volume_level / 100 + ', #CCC)'
        + ')'
    );

    await waitForTimePassed();
    //postVolume();
});

async function waitForTimePassed() {
    return new Promise(resolve => {

        function checkFlag() {
            if (Date.now() > start_time + 1000) {
                //console.log('met' + volume_level);
                postVolume();
                resolve();
            } else if (Date.now() > start_time + 60000) {
                console.log('not met, time out');
                resolve();
            } else {
                window.setTimeout(checkFlag, 200);
            }
        }

        checkFlag();
    });
}

function postVolume() {
    if (last_sent !== volume_level) {
        console.log('Volume: ' + volume_level);

        $.post("/volume?level=" + volume_level, function (data) {
            console.log('NAO volume = ' + volume_level);
        });

        last_sent = volume_level;
    }
}