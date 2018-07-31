var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}
