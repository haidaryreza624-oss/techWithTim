const prompt = require('prompt-sync')()

let answers = 0
let numberOfQuestions = 3
answer1 = prompt("Whats the brain of a computer? ")
correct1 = 'CPU'
if (answer1.toUpperCase() === correct1) {
    console.log("You got it correct!")
    answers += 1

} else {
    console.log("You got it wrong")
}


answer2 = prompt("Which one is better 3090ti or 4060? ")
correct2 = '3090ti'
if (answer2.toLowerCase() === correct2) {
    console.log("You got it correct!")
    answers += 1

} else {
    console.log("You got it wrong")
}

answer3 = prompt("Whats the amount of recommended ram in 2025? ")
correct3 = '16GB'
if (answer3.toUpperCase() === correct3) {
    console.log("You got it correct!")
    answers += 1

} else {
    console.log("You got it wrong")
}

const percent = Math.round((answers / numberOfQuestions) * 100)
console.log("You got", answers, "Correct Answers")
console.log("Your percentage", percent.toString() + "%")

