console.log("Async await");

async function hello()
{
  // console.log("Inside hello")
  const response= await fetch("https://api.github.com/users");
  // console.log("Before  response")
  var users = await response.json();
  // console.log("After response");
  return users;
}
// console.log("Before Calling Hello");
var a = hello();
// console.log("After Calling hello");
// console.log(a);
a.then(data => 
  {
    console.log("Promise filled")
    console.log(data)
  })
.catch(error=> console.log(error))
// console.log("This is the last statement")

