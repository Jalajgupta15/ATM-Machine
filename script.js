function processPIN() {
    const pinInput = document.getElementById('pinInput').value;
    const pin = parseInt(pinInput);

    if (pin === 2468) {
        document.getElementById('atmForm').style.display = 'none';
        document.getElementById('transactionOptions').style.display = 'block';
    } else {
        alert('Wrong PIN. Please try again.');
    }
}

function checkBalance() {
    displayResult('Your current balance is $10,000');
}

function withdrawBalance() {
    const withdrawAmount = prompt('Please enter the withdrawal amount:');
    const updatedBalance = 10000 - parseInt(withdrawAmount);
    displayResult(`${withdrawAmount} is debited from your account. Your updated balance is $${updatedBalance}`);
}

function depositBalance() {
    const depositAmount = prompt('Please enter the deposit amount:');
    const updatedBalance = 10000 + parseInt(depositAmount);
    displayResult(`${depositAmount} is credited to your account. Your updated balance is $${updatedBalance}`);
}

function exit() {
    alert('Thank you for using the ATM. Have a great day!');
    resetForm();
}

function resetForm() {
    document.getElementById('atmForm').reset();
    document.getElementById('atmForm').style.display = 'block';
    document.getElementById('transactionOptions').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function displayResult(message) {
    document.getElementById('transactionOptions').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('outputText').innerText = message;
}
