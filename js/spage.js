// TODO: show "How-to-Play" text when mouse hovered over qmark

const bodyTag = document.getElementById("bodyclick");

bodyTag.addEventListener("click", event => {


    if (event.target.id == 'qmark') {
        console.log("Clicked on htp");
        $('#htpModal').modal({show: true})
    } else if (event.target.id == 'bodyclick') {
        console.log("Clicked on body");
        $('#RoomModal').modal({show: true})
    } else if (event.target.id == 'InvestmentModal') {
        console.log("Clicked on Investment Modal");
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


