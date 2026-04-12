//Transpose Matrix

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let c = matrix[0].length;
let r = matrix.length;

let transpose = new Array(c).fill(0).map(() => new Array(r).fill(0));

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    transpose[j][i] = matrix[i][j];
  }
}

console.log(transpose);
