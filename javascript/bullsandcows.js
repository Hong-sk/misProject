var numCandidates = [0,1,2,3,4,5,6,7,8,9];
var numArray = [];

for(i=0; i<4;i++) {
    var number = numCandidates.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
    numArray.push(number);
}

console.log(numArray);