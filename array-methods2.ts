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


 })