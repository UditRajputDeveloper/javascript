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


const num = ['1','2',3];

let myobj = {
    name:'udit',
    age:'20'
} 


const myfun = ()=>{
    console.log('Hello Word');
}


console.log(typeof myfun)