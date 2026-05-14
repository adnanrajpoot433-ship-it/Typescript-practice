//methods oversLoading and Constructor OverLoading

class Calculator{


    //Constructor overloading 

      constructor(); // default constructor

      constructor(a:number,b:number); // parametrized constructor


      constructor(a?:number, b?:number)
      {

        if(a!==undefined && b!==undefined)
        {
       console.log("sum of a &b:", (a+b))

        }

        else {
            console.log("Default constructor called...");
        }
      }

      //Method OverLoading 

      add(a:number, b:number):number;
      add(a:number,b:number,c:number):number;

      add(a:number,b:number,c?:number)
      {
       
        if (c!=undefined)
            
        {
     
             return a+b+c;

        }
        else
        {
 
            return a+b;

        }

      }


}

//usgae of class 
//construcotr OverLoading
let calc1=new Calculator ();

let calc2=new Calculator (10,20); 

//Method OveLoading

console.log("adding 2 numbers", calc1.add(10,20));

 console.log("adding 3 numbers", calc1.add(10,20,30));

