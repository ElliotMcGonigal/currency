import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './../css/styles.css';
import CurrencyExchange from './currency.js';

function callCurrency(response, currencyToConvert) {
  let exchangeOutcome;
  let errorResponse;
  if (response.result === "success") {
    exchangeOutcome = response.conversion_rates[currencyToConvert];
    return exchangeOutcome;
  } else {
    errorResponse = response["error-type"];
    return errorResponse;
  }
}

async function makeApiCall(currencyToConvert) {
  const response = await CurrencyExchange.callForCurrency();
  return callCurrency(response, currencyToConvert);
}

$(document).ready(function() {
  $('#currencySelect').submit(async function(event) {
    event.preventDefault();
    const currencyToConvert = $('#conversionRate').val();
    const dollars = parseInt($('#dollars').val());
    const conversion = await makeApiCall(currencyToConvert);
    console.log(dollars);
    console.log(conversion);
    $('#displayHere').html("That conververts to " + (conversion*dollars) + " " + currencyToConvert + ".");
  });
});