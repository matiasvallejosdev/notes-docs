/* 
    *Scope* 
    It's the way that you define variables depending on
    the scope of the code. You could define global variables,
    local variables, or block variables. 
*/

// Var
if(true){
    var a = 10; // global scope
    console.log(a); 
}
console.log(a); // You could use here

// Let
if(true){
    let b = 10; // block scope
    console.log(b); 
}

// Error: b is not defined
// console.log(b);  

// Const

if(true){
    const c = 10; // block scope
    // Error: Assignment to constant variable.
    // c = 10; 
    console.log(c);
}

// You could modify object properties
if(true){
    const obj = {
        name: "Matias"
    };
    obj.name = "Juan"; // modify object property
    console.log(obj.name);
}