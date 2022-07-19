console.log("first")
var ga =10000;
function a()
{
  var fa =100;
  console.log(fa)
  debugger
  b();
console.log("After calling b")

}

function b()
{
  debugger
  // var fb =200;
  // console.log(fb)
console.log("After calling c")
c();

 
}


function c()
{
  debugger
  console.log("inside c")
}
debugger
a();
