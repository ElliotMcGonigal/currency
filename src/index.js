//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './../css/styles.css';
import CurrencyExchange from './currency.js';

let exchangeOutcome;
let errorResponse;
function callCurrency(response) {
  if (response.result === "success") {
    exchangeOutcome = response.conversion_rates[`EUR`];
  } else {
    errorResponse = response["error-type"];
  }
}

async function makeApiCall() {
  const response = await CurrencyExchange.callForCurrency();
  callCurrency(response);
}

makeApiCall();
console.log(exchangeOutcome);
console.log(errorResponse);



// $(document).ready(function() {

// });