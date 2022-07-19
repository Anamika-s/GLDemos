console.log("Debugging")
var i= 1;
var j= 100;
function a()
{
  while(i<10)
  {
  i++;
  // console.log(i)
  }
  b()
}

function b()
{
  while(j<120)
  {
// console.log(j)
j++;
  }
}

a();