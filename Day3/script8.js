console.log("Fetch Api");
let btnFetchDetails = document.getElementById("btnFetchDetails");
btnFetchDetails.addEventListener("click", btnFetchDetailsClicked);

let btnAddUser = document.getElementById("btnAddUser");
btnAddUser.addEventListener("click", btnAddUserClicked);

function btnFetchDetailsClicked()
{
   fetch("https://reqres.in/api/users?page=2").then((response)=>
   {
    console.log("Inside 1st then")
    console.log(response)
    return response.json();
   }).then(result=>
   {
    
    console.log("Inside 2nd then")
    console.log(result);
   
   })
}

function btnAddUserClicked()
{
  var obj = {
    "name" :"user100",
    "job" :"leader"
  };
  var reqObj = 
  {
    method:'post',
    headers:{
    'Content-Type':'application/json'
    },
    body : JSON.stringify(obj)
  };

  fetch("https://reqres.in/api/users", reqObj).then(response=>
    {
return response.json();
    }).then(result=>
      {
        console.log(result)

      })
}