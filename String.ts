// String>> Text value or a collection of Character 

//Declaration of strings 

let str1: string= "this is string with double quote";

let str2: string= 'this is string with single quote' ;

let str3: string= `this is string with backtick`; 

console.log(str1);
console.log(str2);
console.log(str3);


// when to use backtick ``

let num:number=10; 

console.log("number is:",num) // valid 

console.log("number is:${num}"); //not valid

console.log('number is:${num}'); //not valid

console.log(`number is: ${num}`); // here we use backtick valid


// String methods 

let str: string= "Hello, TypeScript"; 

//1. length >> find the length of the string ( how many numbers of characters)
console.log(str.length);


//2. toUpperCase() and toLowerCase>> 
console.log("Upper case:",str.toUpperCase());
console.log("Upper case:",str.toLowerCase());


//3. CharAt(index as a parameter) and indexOf(string as a parameter)
console.log(str.charAt(4));
console.log(str.indexOf("type"));


//4. Substring() >> for extracting the portion of the string
// Syntax: String name. substring( starting index, ending index(exclusieve))
console.log(str.substring (0,2)); 



//5. includes() >> return true or false 
console.log(str.includes("abc"));
console.log(str.includes("TypeScript")); 

//6. startwith() and endswith()>> return true or false
console.log(str.startsWith("Hello")); 
console.log(str.endsWith("adnan")); 

//7. Replace ()>> use to replace with the different words
console.log(str.replace("TypeScript","World"));



//8.Split()>> break the string into multiple parts based on the delimater, return an array 
//EX1)
let words: string []=str.split(" ");
console.log(words);


//EX2) 
let mystring: string="abc@gmail.com,xyzabc";
let arr:string []=mystring.split(",");
console.log(arr); 




//9. trim(), trimstart, trimend()
let string1: string="   welcome to typescript   "
console.log(string1.trim()); // this trim from start and the end
console.log(string1.trimStart()); // this trim remove at the start
console.log(string1.trimEnd()); // this trim remove at the ends 


//10. concat()>> use for join them or concat them 
str2="welcome";
str3=" to automation";
console.log(str2.concat (str3)); 


// Concept of String immutability ( can not change original)
num=10;
let res=num+5;
console.log(res);
console.log(num); // as here num value is not changed so it is immutabel same for string 


str2="welcome";
let modifiedString:string=str2.concat(" I am QA");
console.log(modifiedString);
console.log(str2);

//Multiline string ( how to define multiline for that we use backtikc) 
let multiline:string=`welcome
                       to 
                       javascript`;
console.log(multiline);
