class Person
{
   public name:string; //Publicn property.. acessible anywhere
   protected  age:number; // can acess within the class and in the child class
   private  ssn:number; // can acess within the class not even in the child classes


   constructor(name:string,age:number,ssn:number)
   {

    this.name=name;
    this.age=age;
    this.ssn=ssn;

    
   }

   Displayinfo()
   {

    console.log("Name",this.name);
    console.log("Age:",this.age)
    console.log("Ssn:",this.ssn)
   }
}

class Employe extends Person 
{
  private employeeid:number;

  constructor(name:string,age:number,ssn:number,employeeid:number)
  {
    super(name,age,ssn);
    this.employeeid=employeeid;
  }

  showEmployeeDetails()
  {


     console.log(this.name); // public so it is accesible
     console.log(this.age); // protected and acessible
     //console.log(this.ssn); // cant acess as it is private 
     console.log(this.employeeid); // we can acess beuace this also is within the class even in child class
  }



} 

