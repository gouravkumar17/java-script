var obj = {
    name: "Gourav",
    age: 20,
    sayMyName: function(){
        return "my name is "+this.name+" my age is "+this.age
    }
}
var x = obj.sayMyName();
console.log(x);