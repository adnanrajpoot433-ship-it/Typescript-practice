/* An interface in the typescript is a way to define the structure of an object 
1) it tells the compiler what properties and types an object should have 
2) it is like a blueprint for objects 

3) abstract method: we only signature metohd (there is no implemenation)


interface interFaceName 
{
properties
abstract methods
} 

1) regular properties
2)optional properties
3) ReadOnly properties and function Types
4) Extending interFace
5) class implement interface

*/ 

//Example 1: Basic interface 

interface Person
{

    name:string;
    age:number;
} 

let student: Person=
{

    name:"john",
    age:30
}

console.log(student.name);
console.log(student.age); 




//Example 2: optional Properties  (?)

interface Employee 
{

    eid:number;
    ename:string;
    edepartment?: string; // this is optional Property
}

let emp:Employee={

    eid:101,
    ename:"john"

}

let emp1:Employee=
{

    eid:102,
    ename:"smith",
    edepartment: "accounts"

}

console.log(emp.eid,emp.ename,emp.edepartment); // edepartment= undefined

console.log(emp1.eid,emp1.ename,emp1.edepartment); //accounts as we in that object give value 


//Example 3: ReadOnly Propertiy (ReadOnly to prevent modification) & function Types

interface Book 
{
 
    title:string;
    readonly isBin:string;

    display():void // abstract method


} 

let b1:Book=
{

title:"learn playwright",
isBin: " 123abc",

display()
{
console.log(b1.isBin,b1.title);

}

}

console.log(b1.title);
console.log(b1.isBin);
b1.display(); 

console.log("After changing the title");
b1.title="javaScript";
console.log(b1.title);
 // b1.isBin="adnan" // cant change here because it is read only property



 //Example 4: Extending interface (inheritance is applicable)

 //Parents interface
 interface Animal 
 {

  name:string;


 }

 //Child interface
 interface Dog extends Animal 
 {

colour:string;

 }

 let myDog:Dog= 
 {

    name:"buddy",
    colour: "Black"
 }

 console.log(myDog.name,myDog.colour); //  buddy Black


 //Example 5: 
 //class can extends another class 
 //interface can also extends another interface 

 // class can implement interface  

 interface Animal1 
 {
    name1:string;
    sound():void;
 }

 class Dog1 implements Animal1 
 {

    name1:string; // inherit from the interface Animal
     color:string;

    constructor(name:string,color:string)
    {

        this.name1=name;
        this.color=color;
    }

    sound()
    {
        console.log("Bark")
    }

 }

 let pet=new Dog1("Tommy","White");
 console.log(pet.name1);
 console.log(pet.color);
 pet.sound();


