console.log("Inside Script4 using Callback");
const students = [
 {name:"Deepak" , subject:"English"},
 {name:"Ajay" , subject:"English"},
 {name:"Mayank" , subject:"Maths"}
];

function EnrollStudent(student, DispalyStudents)
{setTimeout(()=>
  {
    students.push(student);
    console.log("Studnet is enrolled");
    DispalyStudents(student)
  },3000);
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
EnrollStudent(student, DispalyStudents);
// DispalyStudents();