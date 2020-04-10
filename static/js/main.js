var currentTask = 1;
var currentStage = 1;
var yesPressed;

$(document).ready(function () {
    // Get value on button click and show alert
    $("#greetingButton").click(function () {
        currentTask = 'greeting';
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#startButton1").click(function () {
        currentTask = 1;
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#startButton2").click(function () {
        currentTask = 2;
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#startButton3").click(function () {
        currentTask = 3;
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#startButton4").click(function () {
        currentTask = 4;
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#startButton5").click(function () {
        currentTask = 5;
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#startButton6").click(function () {
        currentTask = 6;
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#goodbyeButton").click(function () {
        currentTask = 'goodbye';
        currentStage = 1;
        continueTask(currentTask, currentStage)
    });
    $("#backButton").click(function () {
        goBack();
    });
    $("#helpButton").click(function () {
        window.history.pushState(123, "Session");
        window.location.replace("/help");
    });
    $("#changeNameButton").click(function () {
        changeName();
    });

    //insertClock("info", 10);
});

function continueTask(task, stage) {
    currentTask = task;
    currentStage = stage;

    switch (task) {
        case 1:
            task1(stage);
            break;
        case 2:
            task2(stage);
            break;
        case 3:
            task3(stage);
            break;
        case 4:
            task4(stage);
            break;
        case 5:
            task5(stage);
            break;
        case 6:
            task6(stage);
            break;
        case 'greeting':
            greeting(stage);
            break;
        case 'goodbye':
            goodbye(stage);
            break;
    }
}

function task1(stage) {
    if (stage === 1) {
        console.log("Task 1, stage 1 started!");
        // CALL STAGE 1
        runTaskStage(1, 1);

        refillTaskBox('taskBox1', "Task 1, stage 1", "Now NAO will ask which vehicle is the child's favorite.", "Did the child answer the question?", 10, true);
        document.getElementById("yesButton-taskBox1").addEventListener("click", function () {
            continueTask(1, 2);
        });
        document.getElementById("noButton-taskBox1").addEventListener("click", function () {
            continueTask(1, 3);
        });
    } else if (stage === 2) {
        console.log("Task 1, stage 2 started!");
        runTaskStage(1, 2);

        refillTaskBox('taskBox1', "Task 1, stage 2", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox1").addEventListener("click", function () {
            continueTask(1, 1);
        });
        document.getElementById("noButton-taskBox1").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 3) {
        console.log("Task 1, stage 3 started!");
        runTaskStage(1, 3);

        refillTaskBox('taskBox1', "Task 1, stage 3", "The child will now be asked the same question again.", "Did the child answer the question?", 10, true);
        document.getElementById("yesButton-taskBox1").addEventListener("click", function () {
            continueTask(1, 2);
        });
        document.getElementById("noButton-taskBox1").addEventListener("click", function () {
            continueTask(1, 4);
        });
    } else if (stage === 4) {
        console.log("Task 1, stage 4 started!");
        runTaskStage(1, 4);

        refillTaskBox('taskBox1', "Task 1, stage 4", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox1").addEventListener("click", function () {
            continueTask(1, 1);
        });
        document.getElementById("noButton-taskBox1").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    }
}

function task2(stage) {
    if (stage === 1) {
        console.log("Task 2, stage 1 started!");
        // CALL STAGE 1
        runTaskStage(2, 1);

        refillTaskBox('taskBox2', "Task 2, stage 1", "Now NAO will ask the child to point at the happy person.", "Did the child point correctly?", 10);
        document.getElementById("yesButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 2);
        });
        document.getElementById("middleButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 4);
        });
        document.getElementById("noButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 3);
        });
    } else if (stage === 2) {
        console.log("Task 2, stage 2 started!");
        runTaskStage(2, 2);

        refillTaskBox('taskBox2', "Task 2, stage 2", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 1);
        });
        document.getElementById("noButton-taskBox2").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 3) {
        console.log("Task 2, stage 3 started!");
        runTaskStage(2, 3);

        refillTaskBox('taskBox2', "Task 2, stage 3", "The task is finished.", "Restart the task?", 10, true);
        document.getElementById("yesButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 1);
        });
        document.getElementById("noButton-taskBox2").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 4) {
        console.log("Task 2, stage 4 started!");
        runTaskStage(2, 4);

        refillTaskBox('taskBox2', "Task 2, stage 4", "The child will now be asked again.", "Did the child point correctly?", 5);
        document.getElementById("yesButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 2);
        });
        document.getElementById("middleButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 5);
        });
        document.getElementById("noButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 3);
        });
    } else if (stage === 5) {
        console.log("Task 2, stage 5 started!");
        runTaskStage(2, 5);

        refillTaskBox('taskBox2', "Task 2, stage 5", "The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox2").addEventListener("click", function () {
            continueTask(2, 1);
        });
        document.getElementById("noButton-taskBox2").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    }
}

function task3(stage) {
    if (stage === 1) {
        console.log("Task 3, stage 1 started!");
        // CALL STAGE 1
        runTaskStage(3, 1);

        refillTaskBox('taskBox3', "Task 3, stage 1", "Now NAO will ask the child if this made John happy, or if it made John angry.", "Did the child answer correctly?", 10);
        document.getElementById("yesButton-taskBox3").addEventListener("click", function () {
            continueTask(3, 2);
        });
        document.getElementById("middleButton-taskBox3").addEventListener("click", function () {
            continueTask(3, 4);
        });
        document.getElementById("noButton-taskBox3").addEventListener("click", function () {
            continueTask(3, 3);
        });
    } else if (stage === 2) {
        console.log("Task 3, stage 2 started!");
        runTaskStage(3, 2);

        refillTaskBox('taskBox3', "Task 3, stage 2", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox3").addEventListener("click", function () {
            continueTask(3, 1);
        });
        document.getElementById("noButton-taskBox3").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 3) {
        console.log("Task 3, stage 3 started!");
        runTaskStage(3, 3);

        refillTaskBox('taskBox3', "Task 3, stage 3", "The task is finished.", "Restart the task?", 10, true);
        document.getElementById("yesButton-taskBox3").addEventListener("click", function () {
            continueTask(3, 1);
        });
        document.getElementById("noButton-taskBox3").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 4) {
        console.log("Task 3, stage 4 started!");
        runTaskStage(3, 4);

        refillTaskBox('taskBox3', "Task 3, stage 4", "The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox3").addEventListener("click", function () {
            continueTask(3, 1);
        });
        document.getElementById("noButton-taskBox3").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    }
}

function task4(stage) {
    if (stage === 1) {
        console.log("Task 4, stage 1 started!");
        // CALL STAGE 1
        runTaskStage(4, 1);

        refillTaskBox('taskBox4', "Task 4, stage 1", "Now NAO will ask the child which vehicle matches the sound.", "Did the child answer correctly?", 10, true);
        document.getElementById("yesButton-taskBox4").addEventListener("click", function () {
            continueTask(4, 2);
        });
        document.getElementById("noButton-taskBox4").addEventListener("click", function () {
            continueTask(4, 3);
        });
    } else if (stage === 2) {
        console.log("Task 4, stage 2 started!");
        runTaskStage(4, 2);

        refillTaskBox('taskBox4', "Task 4, stage 2", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox4").addEventListener("click", function () {
            continueTask(4, 1);
        });
        document.getElementById("noButton-taskBox4").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 3) {
        console.log("Task 4, stage 3 started!");
        runTaskStage(4, 3);

        refillTaskBox('taskBox4', "Task 4, stage 3", "The task is finished.", "Restart the task?", 10, true);
        document.getElementById("yesButton-taskBox4").addEventListener("click", function () {
            continueTask(4, 1);
        });
        document.getElementById("noButton-taskBox4").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    }
}

function task5(stage) {
    if (stage === 1) {
        console.log("Task 5, stage 1 started!");
        // CALL STAGE 1
        runTaskStage(5, 1);

        refillTaskBox('taskBox5', "Task 5, stage 1", "Place the pictures of children in front of the child.", "Are you done placing the pictures in front of the child?", 10, true);
        document.getElementById("yesButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 2);
        });
        document.getElementById("noButton-taskBox5").addEventListener("click", function () {
            alert('Place the pictures in front of the child and then press yes.');
        });
    } else if (stage === 2) {
        console.log("Task 5, stage 2 started!");
        runTaskStage(5, 2);

        refillTaskBox('taskBox5', "Task 5, stage 2", "Now NAO will ask the child which child feels the same as John.", "Did the child answer correctly?", 5);
        document.getElementById("yesButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 3);
        });
        document.getElementById("middleButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 5);
        });
        document.getElementById("noButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 4);
        });
    } else if (stage === 3) {
        console.log("Task 5, stage 3 started!");
        runTaskStage(5, 3);

        refillTaskBox('taskBox5', "Task 5, stage 3", "The task is done.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 1);
        });
        document.getElementById("noButton-taskBox5").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 4) {
        console.log("Task 5, stage 4 started!");
        runTaskStage(5, 4);

        refillTaskBox('taskBox5', "Task 5, stage 4", "The task is done.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 1);
        });
        document.getElementById("noButton-taskBox5").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 5) {
        console.log("Task 5, stage 5 started!");
        runTaskStage(5, 5);

        refillTaskBox('taskBox5', "Task 5, stage 4", "The task is done.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox5").addEventListener("click", function () {
            continueTask(5, 1);
        });
        document.getElementById("noButton-taskBox5").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    }
}

function task6(stage) {
    if (stage === 1) {
        console.log("Task 6, stage 1 started!");
        // CALL STAGE 1
        runTaskStage(6, 1);

        refillTaskBox('taskBox6', "Task 6, stage 1", "Now NAO will ask how the child feels.", "Did the child choose a happy picture?", 10);
        document.getElementById("yesButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 2);
        });
        document.getElementById("middleButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 4);
        });
        document.getElementById("noButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 3);
        });
    } else if (stage === 2) {
        console.log("Task 6, stage 2 started!");
        runTaskStage(6, 2);

        refillTaskBox('taskBox6', "Task 6, stage 2", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 1);
        });
        document.getElementById("noButton-taskBox6").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 3) {
        console.log("Task 6, stage 3 started!");
        runTaskStage(6, 3);

        refillTaskBox('taskBox6', "Task 6, stage 3", "Good job! The task is finished.", "Restart the task?", 10, true);
        document.getElementById("yesButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 1);
        });
        document.getElementById("noButton-taskBox6").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    } else if (stage === 4) {
        console.log("Task 6, stage 4 started!");
        runTaskStage(6, 4);

        refillTaskBox('taskBox6', "Task 6, stage 4", "NAO will now ask the child again.", "Did the child choose a happy picture?", 10);
        document.getElementById("yesButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 2);
        });
        document.getElementById("middleButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 5);
        });
        document.getElementById("noButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 3);
        });
    } else if (stage === 5) {
        console.log("Task 6, stage 5 started!");
        runTaskStage(6, 5);

        refillTaskBox('taskBox6', "Task 6, stage 4", "The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-taskBox6").addEventListener("click", function () {
            continueTask(6, 1);
        });
        document.getElementById("noButton-taskBox6").addEventListener("click", function () {
            alert("Nothing more here, choose another task!");
        });
    }
}

function greeting(stage) {
    if (stage === 1) {
        console.log("Greeting, stage 1 started!");
        // CALL STAGE 1
        runTaskStage('greeting', 1);

        refillTaskBox('greetingBox', "Greeting, stage 1", "Now NAO will what the child's name is.", "Did the child answer with his/her name?", 10, true);
        document.getElementById("yesButton-greetingBox").addEventListener("click", function () {
            continueTask('greeting', 2);
        });
        document.getElementById("noButton-greetingBox").addEventListener("click", function () {
            continueTask('greeting', 3);
        });
    } else if (stage === 2) {
        console.log("Greeting, stage 2 started!");
        runTaskStage('greeting', 2);

        refillTaskBox('greetingBox', "Greeting, stage 2", "When the robot has finished speaking, continue.", "Continue?", 5, true);
        document.getElementById("yesButton-greetingBox").addEventListener("click", function () {
            continueTask('greeting', 3);
        });
        document.getElementById("noButton-greetingBox").addEventListener("click", function () {
            alert("Nothing more here, press yes when the robot is done speaking.");
        });
    } else if (stage === 3) {
        console.log("Greeting, stage 3 started!");
        runTaskStage('greeting', 3);

        refillTaskBox('greetingBox', "Greeting, stage 3", "The child will now be asked to do a high five.", "Did the child do a high five?", 10, true);
        document.getElementById("yesButton-greetingBox").addEventListener("click", function () {
            continueTask('greeting', 4);
        });
        document.getElementById("noButton-greetingBox").addEventListener("click", function () {
            continueTask('greeting', 4);
        });
    } else if (stage === 4) {
        console.log("Greeting, stage 4 started!");
        runTaskStage('greeting', 4);

        refillTaskBox('greetingBox', "Greeting, stage 3", "Good job! The task is finished.", "Restart the task?", 5, true);
        document.getElementById("yesButton-greetingBox").addEventListener("click", function () {
            continueTask('greeting', 1);
        });
        document.getElementById("noButton-greetingBox").addEventListener("click", function () {
            alert('Nothing more here, restart or choose another task.');
        });
    }
}

function goodbye(stage) {
    if (stage === 1) {
        console.log("Good bye, stage 1 started!");
        // CALL STAGE 1
        runTaskStage('goodbye', 1);

        refillTaskBox('goodbyeBox', "Good bye, stage 1", "NAO will now say good bye!", "Say good bye again?", 5, true);
        document.getElementById("yesButton-goodbyeBox").addEventListener("click", function () {
            continueTask('goodbye', 1);
        });
        document.getElementById("noButton-goodbyeBox").addEventListener("click", function () {
            alert('Choose another task, nothing more here.');
        });
    }
}

function refillTaskBox(taskID, title, desc, question, timer = 0, onlyYesNo = false) {
    // Remove existing clocks
    if ($("#clockDiv").length) {
        $("#clockDiv").remove();
    }

    $("#" + taskID).empty(); // Empty task box
    $("#" + taskID).append('<h2>' + title + '</h2>');
    $("#" + taskID).append('<p class="taskDesc">' + desc + '</p>');
    $("#" + taskID).append('<p class="taskDesc">' + question + '</p>');

    if (timer !== 0) {
        insertClock(taskID, timer);
    }

    addButtons(taskID, onlyYesNo);
}

async function addButtons(taskID, onlyYesNo = false) {
    var yesButton = $('<a href="#" id="yesButton-' + taskID + '" class="btn-gradient green large leftButton">Yes</a>').hide();
    var middleButton = $('<a href="#" id="middleButton-' + taskID + '" class="btn-gradient purple large middleButton">No answer</a>').hide();
    var noButton = $('<a href="#" id="noButton-' + taskID + '" class="btn-gradient red large rightButton">No</a>').hide();

    if (onlyYesNo) {
        yesButton.css("left", "38%");
        noButton.css("left", "62%");
    } else {
        yesButton.css("left", "25%");
        middleButton.css("left", "50");
        noButton.css("left", "75%");
    }

    $("#" + taskID).append(yesButton);
    if (!onlyYesNo) {
        $("#" + taskID).append(middleButton);
    }
    $("#" + taskID).append(noButton);

    await waitForClock();

    $("#yesButton-" + taskID).fadeIn("slow");
    if (!onlyYesNo) {
        $("#middleButton-" + taskID).fadeIn("slow");
    }
    $("#noButton-" + taskID).fadeIn("slow");
}

function changeButtonTexts(taskID, text1, text2, text3 = "") {
    $("#yesButton-" + taskID).html(text1);
    $("#noButton-" + taskID).html(text2);

    if ($("#middleButton-" + taskID).length) {
        $("#middleButton-" + taskID).html(text3);
    }
}

async function waitForClock() {
    return new Promise(resolve => {
        var start_time = Date.now();

        function checkFlag() {
            if ($("#clockDiv").is(":hidden") || !($("#clockDiv").length)) {
                console.log('met');
                resolve();
            } else if (Date.now() > start_time + 60000) {
                console.log('not met, time out');
                resolve();
            } else {
                window.setTimeout(checkFlag, 1000);
            }
        }

        checkFlag();
    });
}

function runTaskStage(task, stage) {
    if (task === "greeting" || task === "goodbye") {
        $.post("/" + task + "?stage=" + stage, function (data) {
            console.log("POST SUCCESSFUL! Task: " + task + " Stage: " + stage);
        });
    } else {
        $.post("/task" + task + "?stage=" + stage, function (data) {
            console.log("POST SUCCESSFUL! Task: " + task + " Stage: " + stage);
        });
    }
}

function goBack() {
    window.history.back();
}

function changeName() {
    var txt;
    var childName = prompt("Please enter the child's name:", "Name of the child");
    if (childName == null || childName == "") {
        txt = "User cancelled the prompt.";
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const ipParam = urlParams.get('ip');
        window.location.href = '/main?ip=' + ipParam + '&name=' + childName;
    }
    document.getElementById("demo").innerHTML = txt;
}