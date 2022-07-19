console.log("Execution Context");
console.log("first statement");
var ga = 1000;

function a()
{
  var fa = 100;
  console.log(fa)
  // debugger
  b()
  console.log("After calling b function")
}

function b()
{
  // debugger
  console.log("Inside b")
  c()
  console.log("After calling c function")
}

function c()
{
  // debugger
  console.log("inside c function")
}

debugger
a()

