// super()>> used to inovoke immediate parent class constructor
//Super>> is used to inovoke immidate parent class method
// super >> cant not be used for inovke the parent class property.( in java is it possible)

class parent {

    num:number=12;

    constructor(){

        console.log("This is parent class Constructor...")
    }

    display()
    {

        console.log("this is display () method from parent class")
    }
}

class child extends parent {

    num:number=20;  //overriden

    constructor()
    {
  
    super(); // this super key will inovke the parent class constructor(must be called)

 console.log("This is child class constructor ")

    }

    show()
    {
        // console.log(super.num);// parents property in TS doesnt support super.property to acess parent class property directly unlike java
       console.log(this.num) // 20
         console.log("this is show() method from the child class")
    }

    //Overrided Method
    display()
    {
  
        super.display(); // this will inovoke the parent class method 
       // console.log("This is display() method from a child class")
    }

}

let c1= new child();

c1.show(); 

c1.display();// this will invoke the child class method as it is over rided

//but the requirment is that i want to invoke the parent class method 
//for that we needs to write the super word and the method name in the child class first which we want to inovoke
