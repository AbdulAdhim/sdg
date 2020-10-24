function addTime() {
    var currentTime = document.getElementById('Time').innerHTML;
    var newTime = parseInt(currentTime) + 1;
    document.getElementById('Time').innerHTML = newTime;
}