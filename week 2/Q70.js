//Build Array from Permutation

let ans = [0, 2, 1, 5, 3, 4];

function randomArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let ran = Math.floor(Math.random() * 2);

    if (ran > 0) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  console.log(arr);
}

randomArray(ans);
