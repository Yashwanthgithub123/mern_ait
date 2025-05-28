let students = [
    { code : 101,scores :80},
    { code : 102,scores :70},
    { code : 103,scores :60},
    { code : 104,scores :50},
]
let total = 0
for(let {scores} of students){
    total += scores
}
console.log(total)