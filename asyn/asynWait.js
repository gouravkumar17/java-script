// function greet(){
//     console.log("Hello, World");
//     return "Gourav";
// }
// var a = new greet();
// console.log(a);


// async function greet(){
//     console.log("Hello, World");
//     return "Gourav";
// }
// var a = greet();
// console.log(a);


async function greet(){
    console.log("Hello, World");
    return "Gourav";
}
var a = greet();
a.then((result)=>{
    console.log(result);
})


