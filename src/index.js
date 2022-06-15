//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './../css/styles.css';
import CurrencyExchange from './currency.js';

function callCurrency(response) {
  let exchangeOutcome;
  let errorResponse;
  if (response.result === "success") {
    exchangeOutcome = response.conversion_rates["EUR"];
    return exchangeOutcome;
  } else {
    errorResponse = response["error-type"];
    return errorResponse;
  }

}

async function makeApiCall() {
  const response = await CurrencyExchange.callForCurrency();
  let temp = callCurrency(response);
  console.log(temp);
  return temp;
}
const testF = makeApiCall();
console.log(testF);
// function runTest() {
//   let testAtt = makeApiCall();
//   console.log(testAtt);
//   return testAtt;
// }
// let testCase = runTest();
// console.log(testCase);

// $(document).ready(function() {

// });