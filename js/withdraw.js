document.getElementById('btn-withdraw').addEventListener('click', function () {
    // withdraw user input value function
    const withdrawField = depositWithdraw('withdraw-field');

    // get befor value
    const updateWithdraw = getValue('update-withdraw');

    // update amount
    const updateAmount = updateWithdraw + withdrawField;

    // set amount
    setUpdateAmount('update-withdraw', updateAmount);

    // current balance
    const currentBalance = getValue('current-balance');
    const balance = currentBalance - withdrawField;

    // set current balance
    setUpdateAmount('current-balance', balance)
})