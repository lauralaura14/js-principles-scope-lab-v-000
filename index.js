var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer(bestCustomer) {
  var bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer(bestCustomer) {
  bestCustomer = 'maybe bob'
}
