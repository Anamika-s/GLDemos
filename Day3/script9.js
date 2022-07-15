console.log("Promise Demo")

// pending
// resolved
// rejected

function funn2()
{
  
  return ss;
}

// Producer Code
function func1()
{
  return new Promise(function(resolve, reject)
  {
      setTimeout(()=>
      {
        const error = true;
        if(!error){
        //  console.log("Promise has been fulfilled");
         resolve("Promise has been fulfilled");
        }
        else{
          reject("Promise has been not fulfilled");
        }
        
      },2000);
  })
}

// Consumer Code

func1().then((response)=>
{
  console.log(response)
  // console.log("RESOLVED")
}).catch((error)=>
{
  console.log(error)
})