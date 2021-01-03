var userId;

socket.on('userInfo', function (userInfo) {
    console.log(userInfo.id);
    userId = userInfo.id;
});

socket.on('roomStat', function (roomStat) {
    roomStat.gameStatus.forEach(userStat => {
        if (userStat.user.id == userId) {
            p1_econSI = document.getElementById('p1_econSI');
            p1_socSI = document.getElementById('p1_socSI');
            p1_envSI = document.getElementById('p1_envSI');
            p1_moneyI = document.getElementById('p1_moneyI');

            newEcon = Math.min(100, Math.floor(userStat.status.economy));
            newEnv = Math.min(100, Math.floor(userStat.status.environment));
            newSoc = Math.min(100, Math.floor(userStat.status.society));
            newMoney = Math.ceil(userStat.status.money/1000);

            p1_econSI.innerHTML = newEcon;
            p1_socSI.innerHTML = newSoc;
            p1_envSI.innerHTML = newEnv;
            p1_moneyI.innerHTML = newMoney;

            var econBar = document.getElementById('p1_econSI');
            econBar.style.width = newEcon + '%';

            var envBar = document.getElementById('p1_envSI');
            envBar.style.width = newEnv + '%';

            var socBar = document.getElementById('p1_socSI');
            socBar.style.width = newSoc + '%';
        }
    });
})