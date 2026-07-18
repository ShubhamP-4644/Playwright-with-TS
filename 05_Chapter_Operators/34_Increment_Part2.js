let a = 10;
console.log(++a +a + a++);
console.log(a);


let i = 1;
let result = i++ + ++i;
console.log(result, i);


let k = 10
console.log(++k + ++k);
console.log(k);


let g = 34;
let result2 = g++;
console.log(result2);
console.log(g);

let s = 100;
console.log(s++ + ++s + s++ + ++s);
console.log(s);

let t = 37;
console.log(--t + t--);
console.log(t);

let u = 5;
let v = u-- - --u;
console.log(v, u);

let w = 1;
let x = w++ >1 ? w++ :++w;
console.log(x, w);