// pass by value

// let a = 1
// let b = a  //1                  pass by value are immutable
// b = 2      //2   //1
// console.log(a);
// console.log(b);


// let a = [1, 3, 4]
// let b = a
// b[0]="vick"                    //Mutable   pass by ref
// console.log(a);
// console.log(b);



// a = 1
// console.log(typeof a);

// var a;
// console.log(a);

// console.log(test())

// function test() {  fun dec
//     return "hi"
// }
// let a=1

// let test = a => {   //fun expre
//     return "gg" + a
// }

// let test=a=>"gg"+a

// console.log(test("podd"));


// class Prr{
//     constructor(name, age) {
//         this.name = name,
//             this.age = age;
// }
// }

// let person = new Prr("hux", 23)
// console.log(person);

// "use strict";

// if (true) {
//     const a=1
// }
// let a=1
// function test() {
//     var a=1
 
// }

// test()


// console.log(a);


// let obj = {
//     name: "sds",
//      printt(){
//          return function fff(){
//              console.log(this.name);
//       }
//   }
// }

// obj.printt()()

// console.log(this)
// "use strict";
// a=1
// console.log(a);


// let a = 1

// function gg() {
//     console.log(a);
// }
// gg()

// function hh() {
//     let a=5
//     return function hhh() {

//         console.log(a);
//     }
// }

// let b = hh()
// b()




// let arr = [1, 2, 3];

// function Subset(arr,cur_arr,curr) {
//     if (cur_arr.length >= 0) {
//         console.log(cur_arr.join(" "));
//     }
//     if (cur_arr.length == arr.length) {
//         return ""
//     }
//     for (let i = curr; i < arr.length; i++){
//         cur_arr.push(arr[i]);//[]
//         Subset(arr, cur_arr, i + 1);
//         cur_arr.pop();
//     }
// }

// Subset(arr,[],0)



// function dd() {
//     return

//     let a = 4
//     console.log(a);



// }

// dd()
// let a = "gdg"
// b="fssffs"

// for (let i = 0; i < 3; i++){
//     console.log(a);
//     console.log(b);
// }


//    for (let i = 2; i < arr.length; i++) {
//      cur_arr.push(arr[i]); //[1,2,3]
//      Subset(arr, [1, 2, 3], 3);
//      cur_arr.pop();
   
//    }

// console.log(Array.);

// arr = [1, 2, 3]

// Array.prototype.myfn = function () {
//     return this[0]
// }

// console.log(arr.myfn());

// let c = [3, 4, 5]
// console.log(c.myfn());

//call

// let obj1 = {
//     name:"gg"
// }

// let obj2 = {
//     name:"fdds"
// }

// function pri(a,b) {
//     console.log(`${this.name}is from ${a}and ${b}`);
// }

// pri.call(obj2,"ooty","kodai")
// pri.apply(obj1, ["ooty", "kodai"]);
// let aa = pri.bind(obj2, "ooty", "kodai");
// aa()
// let a = 1;
// let b = 2
// console.log(a + "and" + b);

// console.log(`${a} and ${b}`);