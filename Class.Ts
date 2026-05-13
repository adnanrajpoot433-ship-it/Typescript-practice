//class
//read only>> applicable for  properties 
//Optional Property
//Static >> applicable for variables and methods
      //static properties/static methods are common/shared acorss all the objects
      //static propertis/methods can be acessed through class name directly 
      //static properties/methods can be modified using class
      // can not use this static for static properties, instaead we can use class name 
class Student
{

       readonly Studendt_id:number;   // readonly property (can only be assigned once, inside constructor
       name:string;                   // regular property
       email?:string |undefined                 // ? use for making the property as optional (can be undefined)
      static schoolName:string=" kips school";    // if any property is common for all object then we make that static and that is shared across all  

//Constructor
       constructor(sid:number,name:string,email?:string)
       
       {

       this.Studendt_id=sid;
       this.name=name;
       this.email=email;  // if you dont pass email then it is undefined

       }

   //Method

   displayInfo =():void => {

     console.log("student id:", this.Studendt_id);
     console.log("student name:", this.name);
     console.log("school name:", Student.schoolName)

     if(this.email)
    {
     console.log("student email", this.email);
    }

     else
    {
        console.log("Email is not provided");
    }

   }

   static ModifiedSchoolName(newName:string):void {
    Student.schoolName=newName;


   }


} 

//Usage

let S1=new Student(101,"John");
let S2=new Student(102,"Bob", "qa@gmail.com");

//Display Student INFo

S1.displayInfo();
S2.displayInfo();


//change the schoolName using static method 

Student.ModifiedSchoolName("sunRise academy");

//displaying student info after chanigng school name 
S1.displayInfo();
S2.displayInfo(); 


//try to modify the student_id of the S1 object.
//S1.Studendt_id=111; //cannot assign to "studentid" because it is a read only property 

