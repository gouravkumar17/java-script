async function greet(){
    console.log("Hello, World"); //1 
    return "Gourav";
}
var a = greet()
async function add(){
    console.log("1"); //3
    // a.then((result)=>{
    //     console.log(result);
    // })
    let data = await a;
    console.log(data); //5
    console.log("3"); //6
}
console.log("2"); //2
add();
console.log("4"); //4
