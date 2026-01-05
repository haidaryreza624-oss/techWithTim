const input = document.getElementsByTagName('input')[0]
document.getElementsByTagName('button')[0].onclick = function () {
    // alert(checker(input.value))
    if (checker(input.value) == input.value) {
        document.querySelector(".message").innerHTML = 'Valid Plaindrome'
        document.querySelector(".message").style.display = "block";
    } else {
        document.querySelector(".message").innerHTML = 'Not Valid Plaindrome'
        document.querySelector(".message").style.display = "block";
    }
}

function checker(params) {
    return params.split("").reverse().join("")

}
