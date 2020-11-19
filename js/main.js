var investCount = 0;
var timePassed = 0;

var i = 0;
var txt = null;
var speed = 30;

function initialScreen() {
    var welcomeText = 'Welcome to the game! \nThe game will start in 3.......2.......1....... \nLet\'s start with investing some projects for the community. \nENJOY!\n';
    txt = welcomeText;
    typeWriter();
}


function investProject (projectName) {
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

    timelineAnimation();
    clearScreenTxt();
    txt = `You have just invested a project: ${projectName}\n`;
    typeWriter();

}

function triggerRandomEvent () {
    $('#RandomEventModal').modal({ show: true})
    investCount = 0;
    timePassed = 0;
}

function effectOfRandomEvent(decision) {
    var currentMoney = document.getElementById('Money').innerHTML;
    var currentEcon = document.getElementById('econ_index').innerHTML;
    var currentEnv = document.getElementById('env_index').innerHTML;
    var currentSoc = document.getElementById('society_index').innerHTML;

    if (decision = 1) {
        var costMoney = 100;
        var EconChange = -30;
        var EnvChange = -40;
        var SocChange = 3;

        var newMoney = parseInt(currentMoney) - costMoney;
        var newEcon = parseInt(currentEcon) + EconChange;
        var newEnv = parseInt(currentEnv) + EnvChange;
        var newSoc = parseInt(currentSoc) + SocChange;

        if (newEcon > 100) {
            newEcon = 100;
        }
    
        if (newEnv > 100) {
            newEnv = 100;
        }
    
        if (newSoc > 100) {
            newSoc = 100;
        }

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
    }
    else {
        var costMoney = 300;
        var EconChange = -15;
        var EnvChange = -25;
        var SocChange = -8;

        var newMoney = parseInt(currentMoney) - costMoney;
        var newEcon = parseInt(currentEcon) + EconChange;
        var newEnv = parseInt(currentEnv) + EnvChange;
        var newSoc = parseInt(currentSoc) + SocChange;

        if (newEcon > 100) {
            newEcon = 100;
        }
    
        if (newEnv > 100) {
            newEnv = 100;
        }
    
        if (newSoc > 100) {
            newSoc = 100;
        }

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

    }
    clearScreenTxt();
    txt = 'Something just happened in your community!\nPay attention to your sustainable index';
    typeWriter();
}

function clearScreenTxt() {
    if ($('#screen_text').text().length >= 130) {
        document.getElementById("screen_text").innerHTML = '';
    }
    i = 0;
}

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("screen_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);}
}

function pageRedirect(nextURL) {
    location.href = nextURL;
}

function timelineAnimation() {
    var timelineBar = document.getElementById('timeline_bar');
    var currentTime = document.getElementById('Time').innerHTML;
    var totalTimePassed = 1000 - parseInt(currentTime);

    timelineBar.style.width =  totalTimePassed/10 + '%';
}



