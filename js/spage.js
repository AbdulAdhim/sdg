// TODO: show "How-to-Play" text when mouse hovered over qmark

const bodyTag = document.getElementById("bodyclick");

bodyTag.addEventListener("click", event => {


    if (event.target.id == 'qmark') {
        console.log("Clicked on htp");
        $('#htpModal').modal({show: true})
    } else if (event.target.id == 'bodyclick') {
        console.log("Clicked on body");
        $('#RoomModal').modal({show: true})
    } else {
        console.log("Nothing");
    }
    
})


function launchGameScreen() {
    document.getElementById("mainscreenbg").style.height = "100%";
}

function quitGameScreen() {
    document.getElementById("mainscreenbg").style.height = "0%";
}

// Countdown Timer
var minutes = 9;
var seconds = 60;

var interval = setInterval(function() {
    if (minutes + seconds > 0){
        if(seconds == 0){
            minutes--;
            seconds = 60;
        }
        seconds--;
        $('#timer_minutes').text(minutes);
        if (seconds < 10){
            seconds = `0${seconds}`
        }
        $('#timer_seconds').text(seconds);
    }

}, 1000);

