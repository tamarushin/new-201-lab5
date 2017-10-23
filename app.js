function sumAndMultiply(a,b,c){ //eslint-disable-line

var firstSum = sum(a,b)[0];
var wholeSum = sum(firstSum,c)[0];
var firstProduct = multiply(a,b)[0];
var wholeProduct = multiply(firstProduct,c)[0];
var sumMessage = a + ' and ' + b + ' and ' + c + ' sum to ' + wholeSum + '.';
var productMessage = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + wholeProduct + '.';
return [wholeSum, wholeProduct, sumMessage, productMessage];
console.log(sumMessage, productMessage);
}

// TODO: Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);
