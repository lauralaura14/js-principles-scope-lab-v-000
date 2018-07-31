var customerName = 'bob';

function upperCaseCustomerName() {
  customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

var leastFavoriteCustomer = 'not sure';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'who knows'
}
