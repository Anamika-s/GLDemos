// console.log("Hello")
// let counter : number = 1;
// console.log(counter);
// let name: string = 'John';
// let age: number = 25;
// let active: boolean = true;
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let temp : string;
names.forEach(function (value) {
  console.log(value);
});

function disp_details(id:number,name:string,mail_id?:string) { 
  console.log("ID:", id); 
  console.log("Name",name); 
  
  if(mail_id!=undefined)  
  console.log("Email Id",mail_id); 
}

disp_details(12121, "ajay")
