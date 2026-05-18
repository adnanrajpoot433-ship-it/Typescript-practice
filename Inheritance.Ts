//A class can reuse the properties and methods of another class.
//inheritence is a mechanisem where one class (child) can inherit the properties of another class(parent)
// inheritance allow you to reuse the functionality of an existing class without rrewiriting it

//Method Overriding 
//A SUBCLASS/child class CAN PROVIDE A SPECIFIC IMPLEMENTATION OF A Method that is already defined in irs superclas.
// the mehtod have the same name, return type. and parameters



//A CLASS >>> properties+method  (parent class/ super class/ base class)
//B Class >> propertieis+method  ( child class/ derivied class/ sub class)

// Parent Class
class car

{

    name:string;
    colour:string;
    model:string;

    constructor(name:string,colour:string,model:string)
    {
 
    this.name=name;
    this.colour=colour;
    this.model=model;


    }

    start(){

        console.log("car started")
    }

    Stop(){

        console.log("car stopped")
    }

    Displayinformation(){

        console.log(`Name: ${this.name}, Color: ${this.colour}, Model:${this.model}`)

    }

}

//child class >> Honda

class Honda extends car
{

year:number;

constructor(name:string,colour:string,Model:string,year:number)
   
{
super(name,colour,Model)
this.year=year;
 
}

//Method overriding
start()
{

    console.log("Honda Started...")

}

yom()
{
console.log(`Name: ${this.name}, Color: ${this.colour}, Model:${this.model} yom: ${this.year}`);
}


}


//child class >>maruti 

class Maruti extends car 

{
 
    year:number;

    constructor(name:string, colour:string, model:string, year:number) {

        super(name,colour,model)
        this.year=year
    }

    //Method Overriding

    start()
    
    {
        console.log("Matuti statred...")
    }

    yom()
    
    {
        console.log(`Name: ${this.name}, Color: ${this.colour}, Model:${this.model} Yom: ${this.year}`);

    }

}



// HOW TO USE THESE CLASSES 

//createHonda object 
let honda=new Honda("Honda","red","Honda City", 2024); 
console.log(honda.name); // trying to print individual property 
console.log(honda.colour);
console.log(honda.model);
console.log(honda.year); 

honda.start(); // called child class method(overrided)
honda.Displayinformation(); // here it will call from parent as it is not overided
honda.Stop(); //here it also called from the parent as it is not overrided
honda.yom(); 

//Create Maruti Object 
let maruti=new Maruti ("Maruti","Blue","Suzuki",2023);
maruti.start();  // it will calls from the child class
maruti.Stop(); // it will calls from the parent classs
maruti.yom(); // it will calls from the child class maruti


//parent class variable is holding child class object

let car1:car=new Honda("Honda","Red","Honda City",2024);
car1.Displayinformation();
car1.start(); // CHILD CLASS will be calls

//car1.yom(); // not acessible  becuase defined insdie the child class but not in the parent class