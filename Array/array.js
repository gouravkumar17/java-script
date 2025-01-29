// var arr = [3,4,5,6,7,8];
// console.log(arr[4]);

// var arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(arr[0][2])


//push method
// var arr = [4,5,6,7];
// arr.push("a","b");
// console.log(arr);

// var arr2 = [3,4,5,6,7].push("Gourav","Kumar");
// console.log(arr2);


// var arr = [1,2,3,4,5,6];
// arr.pop();
// console.log(arr);


// var arr = [1,2,3,4,5,6];
// var x = arr.pop();
// console.log(x);

//Slice
// var arr = [1,2,3,4,5,6];
// var x = arr.slice(2,1);
// console.log(x);

//Shift
// var arr = [4,5,6,7,8,9]
// var x = arr.shift();
// console.log(x);

//UnShift
// var arr = [2,3,4,5];
// arr.unshift("a","b");
// console.log(arr);

//Splice
// var arr = [3,4,5,6,7,8];
// var x = arr.splice(2,0,"a","b","c","d");
// console.log(x);
// console.log(arr);

// var arr1 = [2,4,6,8,10];
// var arr2 = [];
// for(let i=0;i<arr1.length;i++){
//     arr2.push(arr1[i]*arr1[i]);
// }
// console.log(arr2);

// var arr = [1,2,3];
// for(let i=0;i<arr.length;i++){
//     arr = arr[i]*2;
// }
// console.log(arr);

//Map
// var arr = [2,3,4,5,6]
// var arr2 = arr.map(function (item,idx){
//     return item*item;
// })
// console.log(arr2);

// var arr = [2,3,4,5,6]
// var arr2 = arr.map(function (item,idx){
//     return item>3;
// })
// var arr3 = arr.map((item)=>item*10)
// console.log(arr2);


//Filter
// var arr = [2,3,4,5,6]
// var arr2 = arr.filter(function (item,idx){
//     return item>3;
// })
// console.log(arr2);


//Reduce
// var arr = [4,5,6,7,8,9];
// var arr1 = arr.reduce((total,i)=>{
//     return total*i;
// },0)
// console.log(arr1);

//Sort
// var arr = [4,2,-200,100,5,7,21,-1,3,4,5];
// arr.sort();    Not Give proper output as acced.. oderr
// console.log(arr);

var arr = [4,-200,100.5,-1.5,3.21,20,8,3,9,1];
arr.sort((a,b)=>{
    // return a-b;
    return b-a;
})
console.log(arr);