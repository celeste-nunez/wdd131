function isCardNumberValid(number) {
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
    const cardNumber = document.querySelector('input[name="cardNumber"]').value;
    
	displayError('')

	if (isNaN(cardNumber)) {
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(cardNumber)) {
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}

    alert("Payment submitted successfully!")
    document.querySelector('.creditCard').reset();

	return true
}

// line 40 curtosey of chatgpt

document.querySelector('.creditCard').addEventListener('submit', submitHandler);
