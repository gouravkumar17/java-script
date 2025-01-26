// greet();
// function greet(){
//     console.log("Good Afternoon");//function statement
// }
// greet();

// var add = function(){
//     console.log(5+5);//function expression
// }
// add();

//call back function

// function add(){
//     console.log(5+5)
// }
// function greet(x,y){
//     x()
//     console.log(y);
// }
// greet(add,"Ram Ram");

// function name(){
//     console.log("Gourav")
// }
// function greet(x,y){
//     x();
//     console.log(y);
// }
// greet(name,"Good Afternoon");




//fat arrow function
function add(){
    return 3+5;
}
var sum = function(){
    return 4+5;
}
var addition = ()=>{
    return 5+6;
}
console.log(addition());

var sum = x=>x+6
console.log(sum(5));



