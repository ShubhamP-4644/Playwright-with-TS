const test = require ("node:test");

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80., 90]
];
console.log(grid[0][0]);

grid [0][0] = 99;       // We can change value

console.log(grid);  

console.log(grid.length);       // 3 - Number of rows

let mtrx =[
    ["Login", "Pass", 200],
    ["Checkout", "Fails", 404],
    ["Search", "Pass", 180]
];
for (let i=0; i<mtrx.length; i++){
    for (let j=0; j<mtrx[i].length; j++){
        process.stdout.write(mtrx[i][j]+" ");
    }
    console.log("");
}

console.log("--------------");

// Following are rarely used

for (let row of mtrx){
    for (let cell of row){
        process.stdout.write(cell +" ");
    }
    console.log();
}

console.log("=============");

mtrx.forEach(row=>{
    row.forEach(cell => process.stdout.write(cell +" "));
    console.log();
});
console.log("------------");