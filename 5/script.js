const input = document.getElementById('inputTask')
const addBtn = document.getElementById('add')
const mainContainer = document.getElementsByClassName('todo-list')[0]
const key = 'luna'

let items
addBtn.onclick = () => add_item()

function renderitems() {
    mainContainer.innerHTML = ""
    for (const [index, value] of Object.entries(items)) {
        const li = document.createElement('li')
        const done_btn = document.createElement('button')
        const remove_btn = document.createElement('button')
        done_btn.innerHTML = '✓'
        remove_btn.innerHTML = '✕'

        remove_btn.onclick = () => remove_item(index)
        done_btn.onclick = () => done_item(index)

        const todo_action = document.createElement('div')
        todo_action.className = "todo-actions"
        todo_action.appendChild(done_btn)
        todo_action.appendChild(remove_btn)

        li.innerText = value[0]
        li.className = value[1]
        li.appendChild(todo_action)
        mainContainer.appendChild(li)
    }
}
function done_item(index) {
    if (items[index][1] == 'done') {
        items[index][1] = 'undone'
    } else {
        items[index][1] = 'done'
    }

    savedata()
}

function savedata() {
    const data = JSON.stringify(items)
    localStorage.setItem(key, data)
    renderitems()

}

function loaddata() {
    const data2 = localStorage.getItem(key)

    console.log(data2)
    if (data2) {
        items = JSON.parse(data2)
    } else {
        items = []
    }

    renderitems()
}

function add_item() {
    const value = input.value
    const newarr = [value, 'undone']

    if (value) {
        items.push(newarr)

    }
    console.log(items)
    input.value = ""
    savedata()


}
function remove_item(index) {
    console.log(index)
    items.splice(index)
    savedata()


}
document.addEventListener('DOMContentLoaded', loaddata)