class Person
{  id : number;
   name : string;
   address : string;
   constructor(id : number, name : string,address : string )

   {
     this.id = id;
     this.name = name;
     this.address = address; 

   }

   DisplayDetails() : void{
    console.log("ID is " + this.id)
    console.log("Name is " + this.name)
    console.log("Address is " + this.address)
    
   }
  }

  var  p = new Person(1,"Ajay", "Delhi");
  p.DisplayDetails();


