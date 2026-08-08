// -------------Scope in Functions--------------//

let env ="Staging";

function setConfig(){
    let timeout = 3000;     // local scope {Blocked scope}
    console.log(env);       // Can access global
    console.log(timeout);  // Can access local
}
setConfig();
console.log(env);
console.log(timeout);       // Can not access since blocked scope 
                            // ReferenceError: timeout is not defined


let g_x = 10;

function outer(){
    let x = 20;
    
function inner(){
    let y = 30;
    console.log(x);
    console.log(y);
}
inner();
console.log(y);     // Not allowed
console.log(x);     // Allowed 
}
outer();
console.log(x);