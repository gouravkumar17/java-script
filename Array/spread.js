// let arr = [5,6,7,8,9]
// function add(x,y,z,a,b){
//     return x+y+z+a+b;
// }
// var x = add(...arr)
// console.log(x);

//rest 
// function add(...other){
//     // console.log(other)
//     return other.reduce((t,i)=>t += i)
// }
// var x = add(2,3,4,5,6,7,8,9)
// console.log(x);


//concat 2

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var arr4 = [...arr1,...arr2,...arr3]
console.log(arr4);