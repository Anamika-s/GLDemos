console.log("Fetch Api");
let btnFetchDetails = document.getElementById("btnFetchDetails");
btnFetchDetails.addEventListener("click", btnFetchDetailsClicked);

function btnFetchDetailsClicked()
{
   fetch("data.txt").then((response)=>
   {
    console.log("Inside 1st then")
    console.log(response)
    return response.text();
   }).then(result=>
   {
    
    console.log("Inside 2nd then")
    console.log(result);
   
   })
}