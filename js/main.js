var investCount = 0;
var timePassed = 0;

var i = 0;
var txt = null;
var speed = 30;

var selectedRandomEvent;

var randomEventsDict = {
    're1' : {
        eventName: 'Locust Swarm',
        eventDes: 'The locust swarm had just destroyed the crops in the your community farming area.',
        dcs1: {
            dcsDes1: 'Track the swarm and spray insecticide',
            dcsMoneyCost1: -500,
            dcsTimeCost1: -16,
            dcsEcon1: -20,
            dcsEnv1: -8,
            dcsSoc1: -10
        },
        dcs2: {
            dcsDes2: 'Find a group of scientist to research on biological method to solve the swarm issue',
            dcsMoneyCost2: -1000,
            dcsTimeCost2: -50,
            dcsEcon2: -10,
            dcsEnv2: -4,
            dcsSoc2: -5
        }
    },

    're2' : {
        eventName: 'Flooding',
        eventDes: 'It\'s been raining heavily these days, some of your community areas are experiencing flooding ',
        dcs1: {
            dcsDes1: 'Build Water Flow control system',
            dcsMoneyCost1: -1000,
            dcsTimeCost1: -50,
            dcsEcon1: -10,
            dcsEnv1: -6,
            dcsSoc1: -10
        },
        dcs2: {
            dcsDes2: 'Secure basic supply for needy',
            dcsMoneyCost2: -500,
            dcsTimeCost2: -16,
            dcsEcon2: -20,
            dcsEnv2: -10,
            dcsSoc2: -8
        }
    },

}

function pickRandomEvent (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function initialScreen() {
    var welcomeText = 'Welcome to the game! \nThe game will start in 3.......2.......1....... \nLet\'s start with investing 4 projects for the community. \nENJOY!\n';
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

    if (investCount > 4 || timePassed > 100) {
        selectedRandomEvent = setRandomEventContent();
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

function setRandomEventContent () {
    var randomEvent = pickRandomEvent(randomEventsDict);
    var rEventName = randomEvent.eventName;
    var rEventDes = randomEvent.eventDes;

    var dcs1Des = randomEvent.dcs1.dcsDes1;
    var dcs1TimeCost = randomEvent.dcs1.dcsTimeCost1;
    var dcs1MoneyCost = randomEvent.dcs1.dcsMoneyCost1;

    var dcs2Des = randomEvent.dcs2.dcsDes2;
    var dcs2TimeCost = randomEvent.dcs2.dcsTimeCost2;
    var dcs2MoneyCost = randomEvent.dcs2.dcsMoneyCost2;


    document.getElementById('re_title').innerHTML = rEventName;
    document.getElementById('re_des').innerHTML = rEventDes;
    document.getElementById('re_dcs1').innerHTML = dcs1Des;
    document.getElementById('re_dcs1_timecost').innerHTML = dcs1TimeCost;
    document.getElementById('re_dcs1_moneycost').innerHTML = dcs1MoneyCost;
    document.getElementById('re_dcs2').innerHTML = dcs2Des;
    document.getElementById('re_dcs2_timecost').innerHTML = dcs2TimeCost;
    document.getElementById('re_dcs2_moneycost').innerHTML = dcs2MoneyCost;

    console.log(randomEvent);
    triggerRandomEvent();
    return randomEvent;
}

function effectOfRandomEvent(decision) {
    var currentMoney = document.getElementById('Money').innerHTML;
    var currentTime = document.getElementById('Time').innerHTML;
    var currentEcon = document.getElementById('econ_index').innerHTML;
    var currentEnv = document.getElementById('env_index').innerHTML;
    var currentSoc = document.getElementById('society_index').innerHTML;

    if (decision == 1) {
        var costMoney = selectedRandomEvent.dcs1.dcsMoneyCost1;
        var costTime = selectedRandomEvent.dcs1.dcsTimeCost1;
        var EconChange = selectedRandomEvent.dcs1.dcsEcon1;
        var EnvChange = selectedRandomEvent.dcs1.dcsEnv1;
        var SocChange = selectedRandomEvent.dcs1.dcsSoc1;

        var newMoney = parseInt(currentMoney) + costMoney;
        var newTime = parseInt(currentTime) + costTime;
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

    } else if (decision == 2) {
        var costMoney = selectedRandomEvent.dcs2.dcsMoneyCost2;
        var costTime = selectedRandomEvent.dcs2.dcsTimeCost2;
        var EconChange = selectedRandomEvent.dcs2.dcsEcon2;
        var EnvChange = selectedRandomEvent.dcs2.dcsEnv2;
        var SocChange = selectedRandomEvent.dcs2.dcsSoc2;

        var newMoney = parseInt(currentMoney) + costMoney;
        var newTime = parseInt(currentTime) + costTime;
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

    }

    document.getElementById('Money').innerHTML = newMoney;
    document.getElementById('Time').innerHTML = newTime;
    document.getElementById('econ_index').innerHTML = newEcon;
    document.getElementById('env_index').innerHTML = newEnv;
    document.getElementById('society_index').innerHTML = newSoc;

    var econBar = document.getElementById('econ_index');
    econBar.style.width = newEcon + '%';

    var envBar = document.getElementById('env_index');
    envBar.style.width = newEnv + '%';

    var socBar = document.getElementById('society_index');
    socBar.style.width = newSoc + '%';

    clearScreenTxt();
    txt = 'Something just happened in your community!\nPay attention to your sustainable index';
    typeWriter();

    selectedRandomEvent = null;

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



