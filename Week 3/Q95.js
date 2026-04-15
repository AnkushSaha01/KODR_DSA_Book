//Determine Whether target Matrix Can Be Obtained By 90deg Rotation

let mat = [
    [0, 1],
    [1, 0],
  ],
  target = [
    [1, 0],
    [0, 1],
  ];

let n = mat.length;

for (let k = 0; k < 4; k++) {
  if (JSON.stringify(mat) === JSON.stringify(target)) {
    console.log(true);
    return;
  }

  let nextMat = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      nextMat[j][i] = mat[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    nextMat[i].reverse();
  }

  mat = nextMat;
}

console.log(false);
