function multiply(a,b){
  var theproduct = a * b;
  var message = 'The product of ' + a +  ' and ' + b + ' is ' + theproduct + '.';
  console.log(message);
  return [theproduct, message];
}
// // TODO: Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);
