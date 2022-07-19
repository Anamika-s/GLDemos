console.log("Async Call")
const wait= ()=>
{
  console.log("js part starting")
  setTimeout(()=>
  {
    console.log("js part ends here")
  },5000)
}