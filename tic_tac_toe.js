const prompt = require('prompt-sync')()


boards = [
    [" ", " ", "x"],
    [" ", " ", " "],
    [" ", " ", " "]
]
function printBoard(board) {
    console.log('------------------')
    for (const row of board) {
        let str = ""

        for (const element of row) {
            str += element + " "

        }
        console.log(str)
        console.log('------------------')

    }
}


function checkBoard(turn, board) {

    const winner = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[2, 0], [1, 1], [0, 2]]
    ]

    for (const i of winner) {
        let iswin = false
        for (const j of i) {
            const [row, column] = j

            if (board[row][column] == turn) {
                iswin = true
            } else {
                iswin = false
            }
        }
        if (iswin) {
            return true
        }

    }
    return false

}


function fillBoard(board, turn) {
    while (true) {
        const row = prompt("Enter Row: ")
        const col = prompt("Enter Column: ")
        if (row < 0 || row > 2 || isNaN(row)) console.log("Invalid Row!")

        else if (col < 0 || col > 2 || isNaN(col)) console.log("Invalid Column!")

        else if (board[row][col] != " ") console.log("Invalid Cell")
        else {
            board[row][col] = turn
            break
        }
    }


}


let numberOfTurns = 0
let turn = "X"
while (numberOfTurns < 9) {
    console.log("Its", turn, "player's Turn!")
    fillBoard(boards, turn)

    printBoard(boards)
    if (checkBoard(turn, boards)) {
        console.log(turn, 'Wins!')
        break
    }
    if (turn == 'X') turn = 'O'
    else if (turn == 'O') turn = 'X'

    numberOfTurns += 1
}





