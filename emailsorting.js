let EvenID = [ ];
let OddID = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        EvenID.push(i);
     } else {
         OddID.push(i);
    }
}

console.log(EvenID);
console.log(OddID);