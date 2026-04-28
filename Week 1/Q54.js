let n = 5;

for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j < 2 * n - 1; j++) {
        if (j === i || j === (2 * n - 2 - i)) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}