    // Deposit
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    
    //Withdraw
    let withdrawValue = document.getElementById('withdraw-value');
    let withdrawOutput = document.getElementById('withdraw-output');

    // Total Balance
    let balanceOutput = document.getElementById('balance-output');


    function addMoney (currentAmount, newAmount) {
        const result =  Number(currentAmount) + Number(newAmount);
        return result;

    }

    function getMoney (currentAmount, newAmount) {
        const result =  Number(currentAmount) - Number(newAmount);
        return result;
    }


    function deposit () {
        const totalDeposit = addMoney (depositOutput.innerText, depositValue.value);
        depositOutput.innerText = totalDeposit;

        const totalBalance = addMoney (balanceOutput.innerText, depositValue.value);
        balanceOutput.innerText = totalBalance;
    }

    function withdraw () {
        const totalWithdraw = addMoney (withdrawOutput.innerText, withdrawValue.value);
        withdrawOutput.innerText = totalWithdraw;


        const totalBalance = getMoney (balanceOutput.innerText, withdrawValue.value);
        balanceOutput.innerText = totalBalance;
        
    }







function deposit () {
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    let balanceOutput = document.getElementById('balance-output')
    // console.log(depositValue.value);
    // console.log(depositOutput.innerText);
    // console.log(balanceOutput.innerText);
    // depositOutput.innerText = depositValue.value;
    depositOutput.innerText = Number(depositOutput.innerText) + Number(depositValue.value);

    balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value);

    depositValue.value = '';
};

function withdraw () {
    let withdrawValue = document.getElementById('withdraw-value');
    let withdrawOutput = document.getElementById('withdraw-output');
    let balanceOutput = document.getElementById('balance-output');

    withdrawOutput.innerText = Number(withdrawOutput.innerText) + Number(withdrawValue.value);

    balanceOutput.innerText = Number(balanceOutput.innerText) - Number(withdrawValue.value);


    withdrawValue.value = '';
};



