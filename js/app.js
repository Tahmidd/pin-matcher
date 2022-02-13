function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if (number == '<') {
            calcInput.value = Math.floor(calcInput.value / 10);
        }
    }
    else {

        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const successMsg = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');


    if (pin == typedNumber) {

        successMsg.style.display = 'block';
        failError.style.display = 'none';
    }
    else {

        failError.style.display = 'block';
        successMsg.style.display = 'none';
        const tryNumber = document.getElementById('try-count');
        const previousTry = tryNumber.innerText;
        const newTry = previousTry - 1;
        if (newTry >= 0) {
            tryNumber.innerText = newTry;

        }

    }
}