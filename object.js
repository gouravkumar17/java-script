// var person = {
//     fname: "Gourav",
//     lname: "Kumar",
//     age: 20,
//     address:{
//         pincode: 125001,
//         street: "street 5"
//     },
//     skills: ["Java","JavaScript","MERN"]
// }
// console.log(person);

var obj1 = {
    name: "Gourav",
    age: 20,
    city: "Hisar"
}
var obj2 = {
    address: "LPU",
    pincode: 144401
}
Object.assign(obj1,obj2,{gender:"male"})
console.log(obj1);