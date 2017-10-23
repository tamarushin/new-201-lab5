function multiplyArray(testArray){ //eslint-disable-line
testArray = [2,3,4]
//by using a for loop, the answer will will multiply each number in the array by its last variable in the array.
var product = 1
for (var i=0; i<testArray.length; i++){
product = multiply (testArray [i], product)[0];
}
//by using testArray.join, I can join all of my variables with whatever string I put in the (). Thank you Kevin!
var testString = testArray.join (',');
  var productMessage = 'The numbers ' + testString + ' have a product of ' + product + '.';
  console.log (productMessage)
return [product, productMessage];
}


// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);
