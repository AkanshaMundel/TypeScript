"use strict";
let id = 5;
console.log('ID:', id);
//datatypes
let no = 56;
let person = 'Akansha';
let x = 'hiies';
let arr = [1, 2, 3, 4,];
// arr.push('person2')--> cnt add string to number define arry
//tuple -> multiple type have to define 
let p1 = [1, 'type', true];
// let p2 :[number]=[2, 4,3] -> cnt add more number if it define as only number as one 
//tuple arry 
let p2;
p2 = [
    [1, 'p1'],
    [2, 'p2'],
    [3, 'p3']
];
//unions -> two datatype 
let u1, u2, u3;
u1 = '23';
u2 = 34;
u3 = 'aka';
//enum -. default by 0 1 2 3 or if assign by 4 then all 5 6 7 
var Dirs;
(function (Dirs) {
    Dirs[Dirs["up"] = 2] = "up";
    Dirs[Dirs["down"] = 3] = "down";
    Dirs[Dirs["left"] = 4] = "left";
    Dirs[Dirs["right"] = 5] = "right";
})(Dirs || (Dirs = {}));
console.log(Dirs.up); //-> op as 0 
console.log(Dirs.down); //1
var Dirs2;
(function (Dirs2) {
    Dirs2["up"] = "string";
    Dirs2["down"] = "s2";
    Dirs2["left"] = "s3";
    Dirs2["right"] = "s4";
})(Dirs2 || (Dirs2 = {}));
console.log(Dirs2.up);
const user = {
    id: 1,
    name: 'john'
};
//type asseration -> explict to complier to take two data type 
let cid = 1;
let customerId = cid;
// customerId = true // as getting err as cant be bool as define same as cid number 
let customer2 = cid;
//function 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 'aka'));
function log(message) {
    console.log(message);
}
//it a void function explict mention as void 
log(34);
const interfun = {
    id: 12,
    name: 'bard',
    age: 22
};
const addNum1 = (x, y) => x + y;
const userT1 = 2; // define as type but cnat be wid interface keyword
//classes 
class Class1 {
    constructor(id, name) {
        //    console.log(1223)
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//obj 
const c = new Class1(1, 'A');
const c2 = new Class1(2, 'B');
console.log(c);
c.id = 99;
console.log(c.id);
console.log(c.register());
//extend the class--> subclass c2
class class2 extends Class1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const obj2 = new class2(34, 'extend class', 9);
console.log(obj2);
//generic -> used to make reusable comp  --> using t as in placw 
// function getArray(items:any[]):any[]{
//           return new Array().concat(items);
// }
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3,]);
let stringArr = getArray(['a', 'b', 'rahul']);
stringArr.push('hello');
//to run the tsc file -> tsc --watch 
//to run the js file node file_name
