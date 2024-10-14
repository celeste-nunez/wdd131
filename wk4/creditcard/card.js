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
	const month = document.querySelector('input[name="monthInput"]').value;
	const year = document.querySelector('input[name="yearInput"]').value;
	const cvv = document.querySelector('input[name="CVV"]').value;
    
	displayError('')

	if (isNaN(cardNumber)) {
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(cardNumber)) {
		errorMsg += 'Card number is not a valid card number\n'
	}

	const parsedMonth = parseInt(month, 10); 
	if (isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12) {
		errorMsg += 'Invalid date. Invalid month input.\n';
	}

	const parsedYear = parseInt(year, 10); 
	if (year.length !== 2 || isNaN(parsedYear) || parsedYear < 24 || parsedYear > 31) {
		errorMsg += 'Invalid date. Invalid year input\n';
	}

	const parsedCVV = parseInt(cvv, 10);
	if (isNaN(parsedCVV) || cvv.length !== 3) {
		errorMsg += 'Invalid cvv.\n';
	}

	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}

    alert("Payment submitted successfully!")
    document.querySelector('.creditCard').reset();

	return true
}




// line below curtosey of chatgpt
document.querySelector('.creditCard').addEventListener('submit', submitHandler);