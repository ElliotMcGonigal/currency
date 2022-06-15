import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyExchange from './currency.js';

function callCurrency(response, currencyToConvert) {
  let exchangeOutcome;
  let errorResponse;
  if (response.result === "success") {
    exchangeOutcome = response.conversion_rates[currencyToConvert];
    return exchangeOutcome;
  } else {
    errorResponse = response["error-type"];
    $('#error').html(errorResponse);
  }
}

async function makeApiCall(currencyToConvert) {
  const response = await CurrencyExchange.callForCurrency();
  if (response.result === "success") {
    console.log(response.result);
    return callCurrency(response, currencyToConvert);
  } else {
    $('#error').show();
    $('#displayHere').hide();
  }
}

$(document).ready(function() {
  $('#currencySelect').submit(async function(event) {
    event.preventDefault();
    const currencyToConvert = $('#conversionRate').val();
    const dollars = parseInt($('#dollars').val());
    const conversion = await makeApiCall(currencyToConvert);
    if (isNaN(conversion) === false) {
      $('#displayHere').html("That conververts to " + (conversion*dollars) + " " + currencyToConvert + ".");
    } else {
      $('#displayHere').html("It seems that an invalid currency has been entered. Please enter a different currency and try again.");
    }
  });
});