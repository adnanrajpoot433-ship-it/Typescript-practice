//1) forEach()>> Executes a function once for each array element
// it takes function as a parameter

//Syntax: array-name.forEach(function(currentvalue, index, array)) {})

//currentvalue >> the current element being processed in the arrray 
//index(Optional)>> the index of the current element being processed in the array 
//array(optional) >> the array the current elemnt belongs to 


//EX1) get index of all the fruites along with value 

let fruits: string[] = ["apple", "banana", "mango", "orange"];


console.log(" we will get index and value using the traditonal for loop first")

for( let i in fruits){

    console.log(i,fruits[i]);
}

//EX2) using for each same work 
 
 let fruits1: string[] = ["apple", "banana", "mango", "orange"];

 fruits1.forEach(function(element,index) {

    console.log('${index}','${element}');


 });

 //EX3) convert all elemnts into Uppercase using for loop 

  let fruits2: string[] = ["apple", "banana", "mango", "orange"];
 
  fruits2.forEach((elements)=>{


  console.log(elements.toUpperCase());

  })

  //2. map()>> Create a new array with the result of calling the function on every element of an array
  //it takes function as a parameter
  //return the same number of element that we have in origional array
  
  //Syntax: array.map(function(currentvalue, index, array){})

  //Ex1) get square of all the numbers in an array. EX [1,2,3] result should be [1,4,9]

  let numbers:number[]=[1,2,3];

  let doubled:number[]=numbers.map((num)=>{

    return num*2;

  })
  console.log(doubled); 

  //3.) Filter()>>create a new array with all the elemnts that pass/satisfy the function
  // it takes function as a parameter
  // return either same or fewer numbers of elements compared to original array

// Ex1.) Given an array of numbers, return a new array containing only the even numbers.

   let numbers3: number [] = [12, 7, 5, 18, 9, 20, 33, 40];

  let EvenNumber= numbers3.filter((num)=>{

      return(num%2===0);
  })

  console.log(EvenNumber); 

//Ex2 Given an array of product objects {name, price}, return products where price is less than 1000.
 
let products = [
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1200 },
  { name: "USB Cable", price: 300 },
  { name: "Monitor", price: 15000 },
  { name: "Charger", price: 700 }
];

let filteredProducts = products.filter((product) => {
  return product.price < 1000;
});

console.log(filteredProducts); 

//EX3. Given an array containing different values (numbers, strings, booleans, null, undefined), return only the truthy values.

let values = [0, "hello", "", false, 42, null, "world", undefined, true];

let truthyValues = values.filter((value) => {
  return value;
});

console.log(truthyValues);

//EX.4) Given an array of strings, return only the strings that are not empty ("").

let strings = ["hello", "", "world", "", "typescript", ""];

let nonEmptyStrings = strings.filter((str) => {
  return str !== "";
});

console.log(nonEmptyStrings); 

//Reduce()>> applies a function on every element and return a single value 

// Syntax: array-name. reduce(function(accumulator, current value, index, array}{}) 

//EX1) get the total (sum) of all the elements in an array 

let numbers4: number [] = [12, 7, 5, 18, 9, 20, 33, 40];

let reduceResult =numbers4.reduce((total,element)=> {

return (total+element);

// let reduceResult =numbers4.reduce((total,element)=> (total+element,0); this is the direct method

},0) // here 0 is default value of accumulator
console.log(reduceResult); 

//5. some()>> check if any element satisfies a condition 
// return true if at least one elemtn passes the condition, else false

//Synatx: array-name.some(Function(currentValue,index, array){})  

//EX1) Check array contains negative number or not 

let numbers5: number [] = [12, 7, 5, 18, 9, 20, 33, 40,-1];

let hasNegativeValue=numbers5.some((num)=>num<0);

console.log(hasNegativeValue);

let hasPositiveValue=numbers5.some((element)=>element>0); // Checking the positive number

console.log(hasNegativeValue);

//6. every()>> check if all element satisfiy the condition
// return true if all elements pass the condition, else false 

//Syntax: array-name.Every(function(currentValue, index, array){})

//EX1) 

let numbers6: number [] = [12, 7, 5, 18, 9, 20, 33, 40,-1];

let hasEvenNumbers=numbers6.every((num)=>(num%2===0)); 

console.log(hasEvenNumbers);