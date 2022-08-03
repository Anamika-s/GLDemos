// console.log("Hello")
// let counter : number = 1;
// console.log(counter);
// let name: string = 'John';
// let age: number = 25;
// let active: boolean = true;
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
var temp;
names.forEach(function (value) {
    console.log(value);
});
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(1212, "ajay");

disp_details("dsdsdsdsdsd", 12121);
