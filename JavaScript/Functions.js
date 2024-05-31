// let n = function (a,b){
//     return a+b;
// }

// document.writeln(n(2,3))


// let n1 = function add(a,b){
//     return a+b
// }
// // document.writeln(add(10,7)) Error
// document.writeln(n1(10,7))

// (function fun(a,b){
//     console.log("IIF")
//     console.log(a+b)
// }) (10,5)


//USE OF THIS KEYWORD
// let a;
// let b;
// let c;

// function fun(a,b,c){
//     this.a=a;
//     this.b=b;
//     this.c=c;
//     console.log(this.a,this.b,this.c);
    
// }
// fun(2,1,3);


//ARROW FUNCTION IMPLICIT RETURN
// let n = (b)=>b<10;
// console.log(n(1));
// //Only one statement should be used, but we can use it by inserting two statements inside parenthesis
// let a = (b)=>(console.log(b),
//             b<10)
// console.log(a(1));

let a =0||10
console.log(a)