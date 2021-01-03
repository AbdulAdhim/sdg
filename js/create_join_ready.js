var roomCodeCreate;
var inputtedRoomCode;

function createRoom() {
    socket.emit('createNewRoom');
    showCreateCode();
    showReadyBtn();
}

function joinRoom() {
    inputtedRoomCode = document.getElementById("room").value;
    console.log(inputtedRoomCode);
    console.log('clicked join ' + inputtedRoomCode);
    socket.emit('joinRoom', inputtedRoomCode);
}

function leaveRoom() {
    console.log("leaving room " + inputtedRoomCode);
    socket.emit('leaveRoom');
}

function ready() {
    console.log("ready to join " + inputtedRoomCode);
    socket.emit('ready');
}

function notReady() {
    console.log("cancelling join " + inputtedRoomCode);
    socket.emit('notReady');
}

socket.on('roomStat', function (roomStat) {
    console.log(`GAME ${roomStat.code} STATUS at ${new Date()}`)
    roomStat.gameStatus.forEach(userStat => {
        console.log(`id: ${userStat.user.id}, name: ${userStat.user.name}`)
        console.log(`.... money: ${userStat.status.money}, income: ${userStat.status.income}`)
        console.log(`.... society: ${userStat.status.society}, environment: ${userStat.status.environment}`)
        console.log(`.... society: ${userStat.status.economy}, invested: ${userStat.status.invested}`)
    });
    console.log(roomStat)
}); 

socket.on('joinRoomConfirmation', function(roomCode){
    roomCodeCreate = roomCode;
    console.log('Join room confirmation:' + roomCode);
    roomCodeElement = document.getElementById("room_code_display");
    roomCodeElement.innerHTML = roomCode;

})

function toggler(divId) {
    $("#" + divId).toggle();
}

var showCnt = 0;
function showReadyBtn() {
    if (showCnt == 0) {
        toggler('myContent');
    }
    showCnt++;
}

function showCreateCode() {
    toggler('showCreateCodeContent');
}

function showJoinCode() {
    toggler('showJoinCodeContent');
}

function showJoinButton() {
    showJoinCode();
    showReadyBtn();
}