//tuples

// 1)tuple is a fixed length array where each element has a specific type 
// 2)it helps in storing multiple fields of different data types together

//Ex1) tuple with 2 vlaues 

/*
let person:[string,number]= ["adnan", 25]; 

console.log(person[0]);
console.log(person[1]);

//Ex2) typles with multiple values 

let user:[number,string,boolean,number,string]=[101,"rizwan",true,102,"fizan"];

console.log(user) */

//Ex3) iterating over a tuple using traditional for loop 
let user:[number,string,boolean,number,string]=[101,"rizwan",true,102,"fizan"];

for ( let i=0; i<user.length; i++)
{
 
    console.log(user[i])

} 

//Ex4) using for in loop ( index based iteration)

let user1:[number,string,boolean,number,string]=[102,"rizwan",true,103,"fizan"];

for( let value in user1)
{

    console.log(user1[value])
}

//Ex5) using for of loop (value based)

let user2:[number,string,boolean]=[104,"rizwan",false];

for ( let value of user2)
{

    console.log(value)
}

//Ex6) Tuple Array ( array of tuples) 

let students:[number,string][]=[[105,"adnan1"], [106,"adnan2"],[107,"adnan3"]];

console.log(students.length)

console.log(students[1]) // if i want to acess specific tuple from array >>[ 106, 'adnan2' ]

