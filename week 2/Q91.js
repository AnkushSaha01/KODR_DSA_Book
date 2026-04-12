//Minimum Number of Seat Everyone

let seats = [3, 1, 5], students = [2, 7, 4]

seats.sort()
students.sort()

let moves = 0

for(let i = 0; i<seats.length; i++){
  moves += Math.abs(seats[i] - students[i])
}

console.log(moves)
