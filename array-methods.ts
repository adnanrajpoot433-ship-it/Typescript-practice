let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=["apple","Banana","Orange","Mango","Cherry"];

console.log("Numbers array", numbers) 
console.log("fruits array", fruits) 


// Length >> array atribute >> use for findng the Size of array 
console.log(fruits.length);

//Array methods 

//1)Push ()>> Adds/Single multiple elements to the end of the array 
//Syntax: array name.push(element1,element2,....elemetn N)

numbers.push(6,7,8,9,10)
console.log(numbers)

//2)Pop() >> Remove the last element from an array 
// Syntax: array_name.pop(Element1,Element2....elemntn)
// pop method will return the removed value and we can store that in new variable

let removedValue=(fruits.pop()); // removed value can store her
console.log(removedValue);
console.log(fruits);

//3) Shift()>> remove the first element of an array
//Syntax: array_name.shift() 
// Shift method will return the removed value and we can store that in new variable

let numbers1:number[]=[1,2,3,4,5,6];
let removedValue1=numbers1.shift(); // here first we removed and then that value is stored in new variable
console.log(numbers1);
console.log(removedValue1); 

//4) unshift() >>Adds multiple elements at the beginning of the array 
// Syntax: array_name.unShift()
// unshift method will return the new Length of array

numbers1.unshift(11,12);
console.log(numbers1);

//5) Concat() >> combine two or more arrays of same types e.g number and numbers
//Syntax: array_name.concat(array1,array2....array N)
// it return new array 

 let concanatedArray: number[]=numbers1.concat( [10,20],[30]);
 console.log(concanatedArray);

 //6) Slice()>> extract a section of array 
 // starting index start from zero
 //ending index will be exclusive. e.g if 3 is ending index it will consider 2
 //Syntax: array_name. Slice(Start, end)
 //it return new array 

 let arra1 = [1, 2, 3, 4, 5,6,7,8,9];

 let extractedarray:number []=arra1.slice(1,3);
 console.log(extractedarray);

 //7) Splice() >> - adds/removes elements from an array (from everywhere)
 // Syntax: array_name.Splice( start, deleteCount, item1,....item2...item N)
 // it return the deleted elements
 let scores :number []= [85, 90, 75, 60, 100];

 let removedElemet: number[] =scores.splice (1,2);
 console.log ( "after splice:", removedElemet); // after splice: [ 90, 75 ] 





