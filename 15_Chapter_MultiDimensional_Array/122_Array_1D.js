//      1D Array, List - Duplicate Element

let arr = ["PASS", "FAIL", "PASS"];


//      2D Array of Arrays (Like a table /grid)

let matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];


let mad = [
    [1, 2, 3, 4]        // 1*4
];

let grid = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

for (let i=0; i<3; i++){        // Here i and j starting with index
    for (let j=0; j<3; j++){
        process.stdout.write(grid[i][j]+"");
     //   console.log(grid[i][j]);
    }
    console.log("");
}