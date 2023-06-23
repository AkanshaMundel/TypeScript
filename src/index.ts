let id= 5

console.log('ID:',id)

//datatypes
let no: number = 56
let person :string ='Akansha'
let x :any='hiies'
let arr:number[] =[1, 2,3 ,4,]
// arr.push('person2')--> cnt add string to number define arry

//tuple -> multiple type have to define 

let p1 :[number, string,boolean]= [1,'type', true]

// let p2 :[number]=[2, 4,3] -> cnt add more number if it define as only number as one 
 //tuple arry 
 let p2: [number,string][]
 p2=[
    [1,'p1'],
    [2,'p2'],
    [3,'p3']

 ]


 //unions -> two datatype 
 let u1,u2,u3: string|number 
u1='23'
u2 =34
u3 ='aka'


//enum -. default by 0 1 2 3 or if assign by 4 then all 5 6 7 
enum Dirs{
    up=2 ,down,left, right,

}
console.log(Dirs.up) //-> op as 0 
console.log(Dirs.down) //1

enum Dirs2{
    up='string' ,down='s2',left='s3', right='s4',

}
console.log(Dirs2.up)


//objects 
type User ={
    id:number,
    name: string,
}

const user :User ={
    id:1,
    name:'john'
}

//type asseration -> explict to complier to take two data type 
let cid :any=1;
let customerId = <number>cid

// customerId = true // as getting err as cant be bool as define same as cid number 
 
let customer2 = cid as number 

//function 
 
function addNum(x:number,y:string):string{
    return x+y

}
console.log(addNum(5, 'aka'));

function log(message:string|number):void{
    console.log(message)
}
//it a void function explict mention as void 

log(34)

//interface -> custom type same as obhj but 
//optional -> ? and readonly pro --> random
interface i1{
   readonly id:number, //if will add id:2 gets err 
    name:string
    age?:any
}
const interfun:i1={
     id:12,
     name:'bard',
    age:22
}

//changing value
// interfun.id= 20 // cant assign as define as readonly value
 
//also in interface ther a return type 
interface MathFun{
    (x:number , y:number):number
}

const addNum1: MathFun =(x:number, y:number) :number =>x+y

//type use -> priitive and unions but in interface we cant

type t1=number|string
const userT1 :t1=2 // define as type but cnat be wid interface keyword


//implemet the interfance 

interface ClassInterfances{
    id:number,
    name:string
    register():string
}
 
//classes 
class Class1 implements ClassInterfances{
  id:number
    name:string
     
    constructor(id:number , name: string){
    //    console.log(1223)
          this.id= id
          this.name=name 
    }

    register(){
         return `${this.name} is now registered`
    }
}
 //obj 
const c= new Class1(1, 'A')
const c2= new Class1(2,'B')
console.log(c);

c.id=99
console.log(c.id)
console.log(c.register())


//extend the class--> subclass c2
class class2 extends  Class1{
    position:string

    constructor(id:number, name:string , position:string){
        super(id,name)
        this.position = position
    }
}

const obj2 = new class2(34,'extend class',9)
console.log(obj2)

//generic -> used to make reusable comp  --> using t as in placw 
// function getArray(items:any[]):any[]{
//           return new Array().concat(items);
// }
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3,])
let stringArr = getArray<string>(['a','b','rahul'])

stringArr.push('hello');


//to run the tsc file -> tsc --watch 
//to run the js file node file_name