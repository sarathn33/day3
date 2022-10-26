//iterate JSON for loop
let a=[{"name":"sarath",
"city":"ooty",
"age":"20",
}]
for( let i=0;i<a.length;i++){
    console.log(a[i])
}

//iterate JSON for in
let x=[{"name":"sarath",
"city":"ooty",
"age":"20",
}]
for( let key in x){
    console.log(x[key])
}

//iterate JSON for of
let p=[{"name":"sarath",
"city":"ooty",
"age":"20",
}]
for( let index of p){
    console.log(index)
}

//iterate JSON forEach
let n=[{"name":"sarath",
"city":"ooty",
"age":"20",
}]
n.forEach((element)=>console.log(element))