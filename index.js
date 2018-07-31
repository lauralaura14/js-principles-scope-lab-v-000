var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
  bestCustomer = 'maybe bob';
}

var leastFavoriteCustomer = 'not sure';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'who knows';
}
