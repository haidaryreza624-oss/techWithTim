const prompt = require('prompt-sync')()
let win = 0
let lost = 0
let tie = 0


while (true) {
    const choice = prompt("Choose rock, paper, scissors (q to quit): ")

    if (choice.toLowerCase() === 'q') {
        break
    }
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        console.log("Invalid Choice! ")
        continue
    }



    const index = Math.round(Math.random() * 2)
    const choices = ['rock', 'paper', 'scissors']
    const computerChoice = choices[index]

    if (choice === computerChoice) {
        console.log("Tie! ")
        tie += 1
    } else if ((choice === 'paper' && computerChoice === 'rock') || (choice === 'rock' && computerChoice === 'scissors') || (choice === 'scissors' && computerChoice === 'paper')) {
        console.log("Won! ")
        win += 1
    } else {
        console.log("Lost!")
        lost += 1
    }
    console.log("ComputerChoice: ", computerChoice)

}



console.log('Win: ', win, 'Lose: ', lost, 'Tie: ', tie)




