//Set Matrix Zeroes

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // 1. Check if the first row has any zeros
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // 2. Check if the first column has any zeros
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // 3. Use first row and column as markers
    // We start from 1,1 to avoid overwriting our "dashboard" prematurely
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 4. Iterate through the inner matrix and set zeros based on markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 5. Finally, handle the first row itself
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // 6. Finally, handle the first column itself
    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};

setZeroes(matrix)

console.log(matrix)