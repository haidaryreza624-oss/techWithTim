const quote = document.getElementsByClassName('quote')[0]
const author = document.getElementsByClassName('author')[0]
const btn = document.getElementsByTagName('button')[0]
let seenMap = new Set()

const quotes = [
    {
        text: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        text: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        text: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        text: "What we think, we become.",
        author: "Buddha"
    },
    {
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    }
];


btn.onclick = function () {


    while (true) {
        let ind = Math.floor(Math.random() * quotes.length)
        if (!seenMap.has(ind)) {
            seenMap.add(ind)
            quote.innerHTML = quotes[ind]['text']
            author.innerHTML = quotes[ind]['author']
            break
        }
        if (seenMap.size == quotes.length) {
            seenMap.clear()
        }

    }



}