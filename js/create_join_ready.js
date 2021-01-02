const token = 'fakeAuthToken-sendLoginRequestToGet';
var socket = io(
    'http://localhost:3000', {
        query: {
            token
        }
    }
);

socket.on('eventOccur', function (event) { //uniqe starter points for each players
    console.log('EVENT', event);
});

var roomCodeCreate;

function createRoom() {
    socket.emit('createNewRoom');
    console.log('room created ' + roomCodeCreate);
    showCreateCode();
    showReadyBtn();
}
var roomCode;

function joinRoom() {
    roomCode = document.getElementById("room").value;
    console.log(roomCode);
    console.log('clicked join ' + roomCode);
    socket.emit('joinRoom', roomCode);
}

function leaveRoom() {
    console.log("leaving room " + roomCode);
    socket.emit('leaveRoom');
}

function ready() {
    console.log("ready to join " + roomCode);
    socket.emit('ready');
}

function notReady() {
    console.log("cancelling join " + roomCode);
    socket.emit('notReady');
}

socket.on('roomStat', function (roomStat) { //uniqe starter points for each players
    console.log(`GAME ${roomStat.code} STATUS at ${new Date()}`)
    roomCodeCreate = roomStat.code;
    roomStat.gameStatus.forEach(userStat => {
        console.log(`id: ${userStat.user.id}, name: ${userStat.user.name}`)
        console.log(`.... money: ${userStat.status.money}, income: ${userStat.status.income}`)
        console.log(`.... society: ${userStat.status.society}, environment: ${userStat.status.environment}`)
        console.log(`.... society: ${userStat.status.economy}, invested: ${userStat.status.invested}`)
    });
    console.log(roomStat)
});

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

function myFunction() {
    document.getElementById("myText").innerHTML = roomCodeCreate;
}
