//Rotate Image

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = matrix.length

let nextMat = new Array(n).fill(0).map(() => new Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    nextMat[j][i] = matrix[i][j];
  }
}

for (let i = 0; i < n; i++) {
  nextMat[i].reverse();
}

console.log(nextMat)
