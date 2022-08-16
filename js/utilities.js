// declear deposit and withdraw function 
function depositWithdraw(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    // input clear field
    inputField.value = '';
    return inputValue;
}


// get befor value
function getValue(valueId) {
    const beforValue = document.getElementById(valueId);
    const value = parseFloat(beforValue.innerText);
    return value;
}

// set update amount
function setUpdateAmount(valueId, setAmonut) {
    const beforValue = document.getElementById(valueId);
    beforValue.innerText = setAmonut;
}