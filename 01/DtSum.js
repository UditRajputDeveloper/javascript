// Perimitive Data Type || Call by Value 
// 7 types : String, Number , boolean, null, undefined , Symbol, BigInt

const score = 100 

const scoreValue = 100.3

const isLoggedIn = false

const outSideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

// console.table(id === anotherId);

// Referance type of Data Type || Not Permitive Data Type 

// Array 
// Objects
//Functions


// const num = ['1','2',3];

// let myobj = {
//     name:'udit',
//     age:'20'
// } 


// const myfun = ()=>{
//     console.log('Hello Word');
// }


// console.log(typeof myfun)


//++++++++++++++++++++++++++++++++//

// stack (primivite) , Heap(Non Primitive) 

let name1 = 'youtube'

let anouthername = name1
anouthername = 'google'

console.log(name1);
console.log(anouthername);

// Stack Primitive me Copy Provide Kiya jata h to orignal Value m change nhi hoga 

let user1 = {
    email:'user@google.com',
    upi:'user@ybl'
}

let user2 = user1 

user2.email = 'Udit@gmail.com'

console.log(user1.email);
console.log(user2.email);



// Stack m Refrance Diya Jata h 

