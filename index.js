// 1. Create one function with zero parameter having a console statement
function one(){
    console.log('first question');
}
one();



// 2. Create one function which takes two values as a parameter and print 
// the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    let result = a + b;
    console.log('Sum of', a, ',', b, 'is', result)
}
sum(3,4);



// 3. Create one function which takes three parameter as first name and 
// last name and age and return the statement as "A is 99 years old"
let a = 'Ritu';
let b = 'Sahani';
let c = 99;
function age(){
    console.log(a,b,'is',c,'years old');
}
age(a,b,c);



// 4. Create one arrow function
let result=(a,b)=>{
    console.log(a+b)
}
result(3,4);



// 5. Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// Ans: undefined.



// 6. Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
// Ans: 21



// 7. Print output
var x = 21;
a();
b();
console.log(a);
function a () {  
    x = 20;
    console.log(x);
};
function b () { 
    x = 40;
    console.log(x);
};
// Ans: 20, 40, function defination of a. 



// 8. Print output
var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
// Ans: a is not defined.

// 9. Write a function that accepts parameter n and returns factorial of n
function factorial(n)
  {
    if(n == 0 || n == 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log('The factorial of', n, 'is', answer);