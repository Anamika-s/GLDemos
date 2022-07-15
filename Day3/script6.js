console.log("xhr object in a simple way")

let btnGetContents = document.getElementById("btnGet");
btnGetContents.addEventListener("click", btnGetClicked);

let btnAddUSer = document.getElementById("btnAdd");
btnAddUSer.addEventListener("click", btnAddClicked);


let btnPopulateList = document.getElementById("btnPopulateList");
btnPopulateList.addEventListener("click", btnPopulateListClicked);


const xhr = new XMLHttpRequest();
function btnGetClicked()
{ 
  xhr.open("Get", "https://reqres.in/api/users?page=2", true);
  // xhr.onprogress = function()
  // {
  //   console.log(xhr.readyState);
  // }
  xhr.onload= function()
  {
    console.log("Inside Load" + xhr.readyState);

// if(xhr.readyState==4 && xhr.status==200)
// // console.log(xhr.responseText)
document.getElementById("contents").innerHTML=xhr.responseText;

  }
  xhr.send(null);
}
 
function btnAddClicked()
{
  var obj = {
    "name" :"user100",
    "job" :"leader"
  };
  xhr.open("POST", "https://reqres.in/api/users" , true);
  xhr.onprogress= function()
  {
    console.log(xhr.readyState);
  }
  xhr.onload= function()
  {
    console.log("Inside Load" + xhr.readyState);

// if(xhr.readyState==4 && xhr.status==200)
// // console.log(xhr.responseText)
document.getElementById("contents").innerHTML=xhr.responseText;
  } 
  xhr.send(obj);
}


function btnPopulateListClicked()
{
xhr.open("Get", "https://jsonplaceholder.typicode.com/comments", true);
  // xhr.onprogress = function()
  // {
  //   console.log(xhr.readyState);
  // }
  xhr.onload= function()
  {
    console.log("Inside Load" + xhr.readyState);

if(xhr.readyState==4 && xhr.status==200)
// // console.log(xhr.responseText)
{
let obj = JSON.parse(xhr.responseText);
console.log(obj)
 let list = document.getElementById("list");
 var str = "";
for(key in obj)
{
  str+= `<li>${obj[key].name}</li>`;
}
list.innerHTML = str;
 }
}
  xhr.send(null);
}
