//Approach 1 : Using literal 
 
// syntax ==> let/const/var  variable Name : data Type []=[]; decleration 

let names : string[]=["adnan", "rizwan", "fizan", "Azan", "ali"] // decleration + initiallization

console.log(names); // here we use console for pritnign the array values 



//Approach 2 : using the Generic way Array <T> Type

let EmpNames : Array <string> =["Mir", "Ahmad", "Ayyan", "Ahsan"] // array of string
console.log(EmpNames);


let EmpIDS : Array<number>= [101,102,103,104,105,106,107,108] // array of numbers 
console.log(EmpIDS);


// if i want to store combination of string and union then i will use union (|)

let data : Array <string | number > = ["adnan","rizwan","fizan", " Moosa",104,108,110]

console.log(data);

// if i want to mix up data or any type of data then i will use (any)

let mixData : Array <any> =[1,"John",true,null];
console.log(mixData); 

//operations on the Array 
//1.)Extracting value from array we use index for that 

console.log(mixData[1]); // john 


//Example 1: ittreate array using looping statement 
// using traditional loop ( For Loop) 

let mixData1 : Array <any> =[1,"John",true,null];
for (let i=0; i<mixData.length; i++) // i<= mixData.length-1 , can also used 
{

    console.log(mixData1[i]);
}



//Example 2: itterating using for in loop (indexes)

let mixData2 : Array <any> =[2,"CENA",false,null];

for (let i in  mixData2)
{

    console.log(mixData2[i]);
}


//Example 3 : itterating using for of loop (values)


let mixData3 : Array <any> =[3,"matt",true,null,false]; 
for (let value of mixData3)
{

    console.log(value); 
}

//Example 4: // for counting the values how many time it is repeating in array

const arr = [5, 1, 5, 3, 5, 8, 5]; 
let count=0;
for ( let value of arr)
{
 if(value===5)
    count++;

}

console.log(count);

//Exampl 5: Task: Find the smallest number
const arr1 = [9, 4, 7, 2, 8, 1];

let smallest :number = arr1[0]!;

for (let value of arr1) {
  if (value < smallest) {
    smallest = value;
  }
}

console.log(smallest); 

//Example 6: 👉 Task: Keep only odd numbers

const arr2 = [11, 22, 33, 44, 55, 66];
const oddNumbers =[];
for ( let value of arr2)
{

    if(value%2===1)
    {
        oddNumbers.push(value);
    }

}

console.log(oddNumbers);


//Example7: 
 
 let data1 = [10, 20, 30, 40, 50];

 for( let value of data1)
 {

    console.log(value)
 } ;


 // array with function 
 
 // passing an array to the function 
 //search an element in a array using function 

   let data2 = [10, 20, 30, 40, 50];
    function search(ele:number, data2 :number[]): boolean
    
    {
    
    for( let i=0; i<data2.length; i++) {

        if(data2[i]===ele)
        {
            return true ;
        }
  

    }

    return false;
 
}

console.log(search (30,data2));

//Example 8: a function takes an array and return an array 

let lowerCase = ["adnan", "rizwan", "fizan"];

function capitalizeWords(arr: string[]): string[] {
    let upperCase: string[] = [];

    for (let value of arr) {
        upperCase.push(value.toUpperCase());
    }

    return upperCase;
}

console.log(capitalizeWords(lowerCase));

