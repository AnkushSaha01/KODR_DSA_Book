//Find the Highest Altitude

let gain = [-5, 1, 5, 0, -7]

let currentAltitude = 0
let altChanges=[]

for(let i = 0; i<gain.length; i++){
  currentAltitude += gain[i]
  altChanges.push(currentAltitude)
}

console.log(Math.max(...altChanges))