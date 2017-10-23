var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line

var one = sum(sum(testArray[0],testArray[1])[0],testArray[2])[0];
var message = testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + one + ' is their sum.';
console.log(message)
return [one, message];
}

// TODO: Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);
