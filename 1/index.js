const body = document.getElementsByTagName('body')[0]
const buttons = document.getElementsByTagName('button')
console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (buttons[i].className != 'random') {
            color(this.className);
        } else {
            random()
        }

    };

}

function color(params) {
    body.style.backgroundColor = params
    // console.log(params)
}
function random() {
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    const color = `rgb(${r},${g},${b})`
    body.style.backgroundColor = color


}
