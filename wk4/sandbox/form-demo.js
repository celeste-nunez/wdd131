function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}
  
function togglePaymentDetails() {
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.querySelector("#creditCardNumberContainer");
  const paypalContainer = document.querySelector("#payPalUsernameContainer");
  const creditInput = document.querySelector("#creditCardNumber");
  const paypalInput = document.querySelector("#payPalUsername");

  creditInput.required = false;
  paypalInput.required = false;
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  
  const paymentSelector = document.querySelector("#payMethod").value;
  if (paymentSelector === "credit") {
    creditCardContainer.classList.remove("hide");
    creditInput.required = true;
  }
  else if (paymentSelector === "paypal") {
    paypalContainer.classList.remove("hide");
    paypalInput.required = false;
  }
}

// helper function to display our errors.
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}
// attach a change event handler to the paymentMethod input
document.querySelector("#payMethod").addEventListener("change", togglePaymentDetails);
// attach a submit event handler to the form

