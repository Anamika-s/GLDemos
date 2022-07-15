console.log("xhr object")

let btnGetContents = document.getElementById("btnGet");
btnGetContents.addEventListener("click", btnGetClicked);


const xhr = new XMLHttpRequest();
function btnGetClicked()
{ 
  // console.log(xhr.readyState);
  xhr.open("Get", "data.txt", true);
  // console.log(xhr.readyState);
  xhr.onreadystatechange = StateChange;
  xhr.send(null);
}

function StateChange()
{
  console.log("State is changed")
console.log(xhr.readyState)
if(xhr.readyState==4 && xhr.status==200)
// console.log(xhr.responseText)
document.getElementById("contents").innerHTML=xhr.responseText;
}