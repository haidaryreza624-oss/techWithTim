const prompt = require('prompt-sync')()
const target = Math.round(Math.random() * 100)
let gusses = 0
while (true) {
    answer = prompt("Enter Your Number (0 - 100): ")
    gusses += 1
    if (answer < target) {
        console.log("Your Answer Is Lower")

    } else if (answer > target) {
        console.log("Your Answer is Higher")
    }
    else {
        console.log("You Got it")
        break
    }
}
console.log("You got the number in", gusses, 'tries')