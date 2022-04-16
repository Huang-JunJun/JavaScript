function makeCount() {
    let count = Math.random()
    return function(){
        return count
    }
}
let conut = makeCount()
console.log(conut())
console.log(conut())
console.log(conut())
console.log(conut())
console.log(conut())
console.log(conut())