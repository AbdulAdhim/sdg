var investCount = 0;
var timePassed = 0;
var welcomeText = 'Welcome to the game! \n\nThe game will start in 3.......2.......1....... \nLet\'s start with investing some projects for the community. \n\nENJOY!';

function investProject () {
    var currentTime = document.getElementById('Time').innerHTML;
    var currentMoney = document.getElementById('Money').innerHTML;
    var currentEcon = document.getElementById('econ_index').innerHTML;
    var currentEnv = document.getElementById('env_index').innerHTML;
    var currentSoc = document.getElementById('society_index').innerHTML;

    var costTime = document.getElementById('cost_time').innerHTML;
    var costMoney = document.getElementById('cost_money').innerHTML;
    var rewardEcon = document.getElementById('reward_econ').innerHTML;
    var rewardEnv = document.getElementById('reward_env').innerHTML;
    var rewardSoc = document.getElementById('reward_society').innerHTML;
    var rewardMoney = document.getElementById('reward_money').innerHTML;
    var rewardTime = document.getElementById('reward_time').innerHTML;

    var newTime = parseInt(currentTime) - parseInt(costTime) + parseInt(rewardTime);
    var newMoney = parseInt(currentMoney) - parseInt(costMoney) + parseInt(rewardMoney);
    var newEcon = parseInt(currentEcon) + parseInt(rewardEcon);
    var newEnv = parseInt(currentEnv) + parseInt(rewardEnv);
    var newSoc = parseInt(currentSoc) + parseInt(rewardSoc);

    if (newEcon > 100) {
        newEcon = 100;
    }

    if (newEnv > 100) {
        newEnv = 100;
    }

    if (newSoc > 100) {
        newSoc = 100;
    }


    document.getElementById('Time').innerHTML = newTime;
    document.getElementById('Money').innerHTML = newMoney;
    document.getElementById('econ_index').innerHTML = newEcon;
    document.getElementById('env_index').innerHTML = newEnv;
    document.getElementById('society_index').innerHTML = newSoc;

    var econBar = document.getElementById('econ_index');
    econBar.style.width = newEcon + '%';

    var envBar = document.getElementById('env_index');
    envBar.style.width = newEnv + '%';

    var socBar = document.getElementById('society_index');
    socBar.style.width = newSoc + '%';

    investCount += 1;
    timePassed += parseInt(costTime);
    console.log(investCount);
    console.log(timePassed);

    if (investCount > 8 || timePassed > 100) {
        triggerRandomEvent();
    }


}

function triggerRandomEvent () {
    console.log('triggered');
    $('#RandomEventModal').modal({ show: true})
    investCount = 0;
    timePassed = 0;
}

var i = 0;
var txt = welcomeText;
var speed = 85;

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("screen_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);}
}




