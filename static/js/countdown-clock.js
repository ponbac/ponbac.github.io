// Start with an initial value of 20 seconds
let TIME_LIMIT = 0;
let WARNING_THRESHOLD = TIME_LIMIT*0.5;
let ALERT_THRESHOLD = TIME_LIMIT*0.25;

let COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (!(timeLeft <= 1)) {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);

            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            console.log('Time remaining: ' + timeLeft);
        } else {
            console.log('Stopped interval!');
            clearInterval(timerInterval);
            $("#clockDiv").fadeOut("slow");
        }
    }, 1000);
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * 283
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

function setRemainingPathColor(timeLeft) {
    const {alert, warning, info} = COLOR_CODES;

    // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);

        // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function insertClock(id, time) {
    // Remove interval counter
    if (timerInterval !== null) {
        clearInterval(timerInterval);
    }

    // Remove existing clocks
    if ($("#clockDiv").length) {
        $("#clockDiv").remove();
    }

    TIME_LIMIT = time;
    WARNING_THRESHOLD = TIME_LIMIT*0.5;
    ALERT_THRESHOLD = TIME_LIMIT*0.25;
    COLOR_CODES.warning.threshold = WARNING_THRESHOLD;
    COLOR_CODES.alert.threshold = ALERT_THRESHOLD;
    timeLeft = TIME_LIMIT;
    timePassed = 0;

    $('#' + id).append(`
        <div class="base-timer clockCenter" id="clockDiv">
          <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
              <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" class="base-timer__label">
            ${formatTimeLeft(timeLeft)}
          </span>
        </div>
    `);

    startTimer();
}