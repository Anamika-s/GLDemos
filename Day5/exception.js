// Errors : We dont get expected result
// Errors 
// 1. Syntax error
// 2. Logical Error
// 3. Runtime Error OR Exceptions

//Syntax Errors occur when we do not follow Grammer / syntax of the language
// Easy to detect & correct
//let a b=0

// Logical Errors : when something is wrong in developer's logic
// 2 - 3
// in this case we get result / but that is not correct
// dif to find out, get them at run time

// Excpetions : An error but it may or may not come 
// it depends upon what user enters or select at run time
// unexpected condition encounter during run time

// Syntax Errors & logical errors can be corrected
// excpetions canyt be corrected , they can be handled

// Exception Handling can be done by using

// try > this block will contain statements which can throw exception
// catch > this block will be used to handle exception in case it occurs
// finally > this block is always executed 
// throw > is used to throw some exc based on some condition
console.log("inside exc")
function CalArea(w,h)
{
  
  if(isNaN(w) || isNaN(h))
{
  throw "Parameters are not numeric"
  }
  area = w * h;

  console.log('Area is '  + area)
}

function ValidateDetails(userName , password)
{
  if(userName.length < 5)
  // throw("Min 5 characters needed")
  throw (new Error("Min 5 characters needed"))
}

function a()
{   try{

  ValidateDetails('user','user')   
  eval('alert("Hello)');
  let num = 12
  console.log(num.toUpperCase())
  CalArea('200','3');
    b()
   
      }
      catch(error)
      {
        document.write(error+"<br>")
        document.write(error.name+"<br>")
        document.write(error.message+"<br>")
        document.write(error.stack+"<br>")
      }
      finally
      {
        console.warn("Some statements")
       console.error("Some statements")
      }

}

a()
console.log("after calling a")












