// console.log("CallBack Method")

// console.log("Start")
// function getName(name)
// {
//   setTimeout(()=>
//   {
//       console.log("Inside GetName"); return name;
//   },2000);
// }

// var name = getName("Deepak");
// console.log(name);
// console.log("End")


console.log("CallBack Method")

console.log("Start")
function getName(name , callback)
{
  setTimeout(()=>
  {
      console.log("Inside GetName"); callback(name);
  },2000);
}

getName("Deepak" ,(name)=>
{
  console.log(name)
});

console.log("End")

