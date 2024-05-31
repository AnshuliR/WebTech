// const a = parseFloat(prompt("Enter first number"));
// const b = parseFloat(prompt("Enter second number"));
// console.log(a+b);

// const a=23;
// const b=`My age is ${a}`;
// console.log(b);

const m1 = parseInt(prompt("Enter the mark"));

//Using if
// if(m1>=0 && m1<35){
//     document.writeln("Fail");
// }
// else if(m1>=35 && m1<50){
//     document.writeln("D grade");
// }
// else if(m1>=50 && m1<70){
//     document.writeln("C grade");
// }
// else if(m1>=70 && m1<85){
//     document.writeln("B grade");
// }
// else if(m1>=85 && m1<=100){
//     document.writeln("A grade");
// }
// else{
//     document.writeln("Invalid marks");
// }

//Using switch
switch(true){
    case (m1>=0 && m1<35): document.writeln("Fail");
    break;
    case (m1>=35 && m1<50): document.writeln("D grade");
    break;
    case (m1>=50 && m1<70): document.writeln("C grade");
    break;
    case (m1>=70 && m1<85): document.writeln("B grade");
    break;
    case (m1>=85 && m1<=100): document.writeln("A grade");
    break;
    default: document.writeln("Invalid marks");
}

