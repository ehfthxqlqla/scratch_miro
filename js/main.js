const agreeCheckbox = document.querySelector(".agree-game"),
movetoGameBtn = document.querySelector(".move-to-game"),
checkboxMark = document.querySelectorAll(".checkmark"),
i_agree = document.querySelector("#i-agree")

let boxChecked = false;

movetoGameBtn.addEventListener("click", function(){
    if (agreeCheckbox.checked) {
        window.location.href = "./main_game/index.html"
    } else {
        alert("위의 체크박스를 눌러주세요.")
    }
})

Array.from(checkboxMark).forEach((element) => {
    element.addEventListener("click", function(){
        if (boxChecked) {
            element.classList.remove("checked")
            agreeCheckbox.checked = false
            boxChecked = false
        } else {
            element.classList.add("checked")
            agreeCheckbox.checked = true
            boxChecked = true
        }
    })
})