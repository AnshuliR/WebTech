let n = parseInt(prompt("Enter a number"));
let n1 = n;
let rev = 0;
while(n1>=1){
    let d = parseInt(n1%10);
    rev = (rev*10)+d;
    n1 = n1/10;
}

if(n==rev){
    console.log("It is a Palindrome number.");
}
else{
    console.log("It is not a palindrome number.");
}