console.log("Inside Script10 using Promise");
const students = [
 {name:"Deepak" , subject:"English"},
 {name:"Ajay" , subject:"English"},
 {name:"Mayank" , subject:"Maths"}
];

function EnrollStudent(student)
{
  return new Promise((resolve, reject)=>
  {
  setTimeout(()=>
  {
    const error=false;
    if(!error)
    {
      students.push(student);
      console.log("Studnet is enrolled")
  
      resolve();
    }
    else 
    reject();
  },3000);
  })
}


function DispalyStudents()
{ 
  setTimeout(()=>
  {
    let str = "";
    students.forEach(student=>
    {
      str+= '<li>' + student.name + '</li>';
    });
    
  document.getElementById("studentsList").innerHTML=str;
  },1000);
}

var student = {name:"Preeti", subject:"Maths"};

EnrollStudent(student).then(function()
{
  DispalyStudents();
}).catch(function()
{
console.log("Not Added");
}).finally
{
  console.log("Always called")
}
