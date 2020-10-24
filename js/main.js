function addTime() {
    var currentTime = document.getElementById('Time').innerHTML;
    var newTime = parseInt(currentTime) + 1;
    document.getElementById('Time').innerHTML = newTime;
}

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

    document.getElementById('Time').innerHTML = newTime;
    document.getElementById('Money').innerHTML = newMoney;
    document.getElementById('econ_index').innerHTML = newEcon;
    document.getElementById('env_index').innerHTML = newEnv;
    document.getElementById('society_index').innerHTML = newSoc;
}