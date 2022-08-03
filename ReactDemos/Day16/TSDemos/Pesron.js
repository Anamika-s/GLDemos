var Person = /** @class */ (function () {
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Person.prototype.DisplayDetails = function () {
        console.log("ID is " + this.id);
        console.log("Name is " + this.name);
        console.log("Address is " + this.address);
    };
    return Person;
}());
var p = new Person(1, "Ajay", "Delhi");
p.DisplayDetails();
