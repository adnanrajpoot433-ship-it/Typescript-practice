// Objects>> objects Contain Properties and behaviour 
// object contains variables & methods (functiion insdie an object called method)
// object is collection of key and value pairs.


//EX:

//Employe>> name, designation, salaray, dept
//             bonus(), getempdetails(), setdetails()

//student>> name, id, grade, marks
//           getdetails(), setdetails() 


//Different ways to create and Object in JS/TS 
//1. using "object" type >> directly define the values for vairable (JS/TS)
//2. inline type object>> we also define the datetype of the keys (TS)
//3. using type aliases (JS/TS)
//4. using the classes (JS ES16/TS) 





//1. using "object" type >> directly define the values for vairable (JS/TS)
// the Typescript "object" type represent all values that are not in primitive types 
// when we use object keyword then we can just save object properties not method


//this is one syntax in this we cant write the method
let employes=
{
  name:"Adnan",
  age: 27,
  salary:300000,
  job:"QA Engineer",
  getDetails: function (){

    return `${this.name} is a ${this.job} earning ${this.salary}`;
  }
}

//Acessing the Objects>> Approach 1 (using . Notation)
console.log(employes.name,employes.age,employes.salary,employes.job); 
console.log(employes.getDetails()); // fetching methods from the object

//Acessing the Objects>> Approach 2 (using bracket notation)
// in this we put key in "" and [] pair
console.log(employes["name"],employes["job"],employes["salary"]);
console.log(employes["getDetails"]());

//to modify the value in the object 
employes.job="manager";
console.log(employes.job); 


//================================================================

//2.//2. inline type object>> we also define the datetype of the keys (TS) 
// problem in this is that we need to repeate the structre multiple time
let student:{
      name:string,
      age:number,
      grade:string,
      getSummary:()=>string
} = {

  name:"ali",
  age:15,
  grade:"A",
  getSummary: function() 
    
    {

    return `${this.name} is ${this.age} years old and score grade ${this.grade}`;
  }
}
console.log(student.getSummary());

//3. using type aliases (JS/TS): allows creating a new name for an existing type

//Example 1:

type products={
         name:string,
         price:number,
         getinfo:()=>string
};

let book1:products=
{

  name:"fizan",
  price:50,
  getinfo: function()
  
  {

    return `${this.name} costs ${this.price}`;

  }

}

let book2:products=
{

  name:"rizwan",
  price:60,
  getinfo: function()
  
  {

    return `${this.name} costs ${this.price}`;

  }}

  console.log(book2.getinfo());
  console.log(book1.getinfo());


  //========================================================
  //4. using the classes (JS ES16/TS) 
  

  class Person{

    ssn:string;
    firstname:string;
    lastname:string;


    constructor (ssn:string,firstName:string,LastName:string)
    {
    
        this.ssn=ssn;
        this.firstname=firstName;
        this.lastname= LastName;

    }

    getFullName():string{

      return `${this.firstname} ${this.lastname}`
    }

     getDetails():string{

      return `ssn:${this.ssn}, Name: ${this.getFullName()}`;
     }

  }

  //Object creation
  let person1=new Person("ad","ba","cd");
  console.log(person1.getDetails());

  let person2=new Person("bc","bd","dx");
  console.log(person2.getDetails());

  let person3=new Person("ma","na","ba");
 console.log (person3.getDetails());