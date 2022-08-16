

document.getElementById('btn-deposit').addEventListener('click', function () {
    // deposit user input value function
    const depositField = depositWithdraw('deposit-field');

    // get befor value
    const updateDeposit = getValue('update-deposit');

    // update amount
    const updateAmount = updateDeposit + depositField;

    // set amount
    setUpdateAmount('update-deposit', updateAmount);

    // current balance
    const currentBalance = getValue('current-balance');
    const balance = currentBalance + depositField;

    // set current balance
    setUpdateAmount('current-balance', balance)

})