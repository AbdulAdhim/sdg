const investments = [
    {
        id: 0,
        name: 'Public Transportation',
        des: 'Improve the facilities of public transporation',
        cost: 100,
        require: [], // Might be too hard to implement
        time: 30,
        affect: {
            economy: 5, society: 3, environment: 7, income: 300,
        },
    },
    {
        id: 1,
        name: 'Community Recovery Fund',
        des: 'Establish a community fund which can be used to response to pandemic or emergency situation',
        cost: 1000,
        require: [],
        time: 8,
        affect: {
            economy: 15, society: 5, environment: 0, income: 7,
        },
    },
    {
        id: 2,
        name: 'Social Protection',
        des: 'Improve workers’ benefits and guarantee their rights (such as Unemployment insurance)',
        cost: 500,
        require: ['1'], // Might be too hard to implement
        time: 16,
        affect: {
            economy: 2, society: 8, environment: 0, income: 5,
        },
    },
    {
        id: 3,
        name: 'Study Grants and Loans',
        des:'Provide study grants and loan to workers to sharpen their skills, which can help them in finding a better job, and increase job opportunities',
        cost: 3000,
        require: [],
        time: 30,
        affect: {
            economy: 15, society: 15, environment: 1, income: 700,
        },
    },
    {
        id: 4,
        name: 'Telework Support',
        des: 'Invest to upgrade digital equipment of workers and enhance experience of remote working',
        cost: 2500,
        require: [],
        time: 16,
        affect: {
            economy: 10, society: 10, environment: -2, income: 500,
        },
    },
    {
        id: 5,
        name: 'Food Stamps',
        des: 'Food Voucher to needy, which can be used to exchange food and necessary ingredients',
        cost: 200,
        require: [], 
        time: 4,
        affect: {
            economy: 5, society: 10, environment: 2, income: 10,
        },
    },
    {
        id: 6,
        name: 'Meal for School Children',
        des: 'Provide free nutritous meal (breakfast and lunch) to school children',
        cost: 300,
        require: [], 
        time: 8,
        affect: {
            economy: -3, society: 8, environment: 0, income: 0,
        },
    },
    {
        id: 7,
        name: 'Housing Subsidy',
        des: 'Provide housing subsidy (on rent or buying new house) for low-income family to improve their living environment',
        cost: 3000,
        require: [], 
        time: 40,
        affect: {
            economy: 5, society: 15, environment: -3, income: 200,
        },
    },
    {
        id: 8,
        name: 'Schools\' facilities',
        des: 'Improve the facilities and equipments to be used in schools',
        cost: 2000,
        require: [], 
        time: 50,
        affect: {
            economy: -5, society: 15, environment: 0, income: 100,
        },
    },
    {
        id: 9,
        name: 'Organic Farming',
        des: 'Encourage farmers to practice organic farming, invest to provide them related equipments and skills',
        cost: 1500,
        require: [], 
        time: 50,
        affect: {
            economy: 2, society: 2, environment: 10, income: 500,
        },
    },

];

investedlist =  []

var app = angular.module("gameInvestment", []);
app.controller("gameInvestmentCtrl", function($scope) {
    var showingInvestmentList = [];
    for (i in investments) {
        if (investments[i].require.length == 0) {
            showingInvestmentList.push(investments[i]);
        }
    }
    $scope.investmentList = showingInvestmentList;
});

function triggerInvestmentModal (inv_num) {
    setInvestmentContent(inv_num);
    $('#InvestmentModal').modal({ show: true});
}

function closeInvestmentModal () {
    $('#InvestmentModal').modal({ show: false});
}

function setInvestmentContent (inv_num) {
    selectedInv = investments[inv_num];

    invName = selectedInv.name;
    invDes = selectedInv.des;
    invTimeCost = selectedInv.time;
    invMoneyCost = selectedInv.cost;
    invEconChange = selectedInv.affect.economy;
    invEnvChange = selectedInv.affect.environment;
    invSocChange = selectedInv.affect.society;
    invMoneyReward = selectedInv.affect.income;

    document.getElementById('inv_title').innerHTML = invName;
    document.getElementById('inv_des').innerHTML = invDes;
    document.getElementById('cost_time').innerHTML = invTimeCost;
    document.getElementById('cost_money').innerHTML = invMoneyCost;
    document.getElementById('reward_econ').innerHTML = invEconChange;
    document.getElementById('reward_env').innerHTML = invEnvChange;
    document.getElementById('reward_society').innerHTML = invSocChange;
    document.getElementById('reward_money').innerHTML = invMoneyReward;

    investButton = document.getElementById('invest_button');
    strName = "makeInvestment(" + inv_num + ")";
    investButton.setAttribute("onclick", strName);
}