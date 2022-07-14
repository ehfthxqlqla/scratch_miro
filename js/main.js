const agreeCheckbox = document.querySelector(".agree-game"),
movetoGameBtn = document.querySelector(".move-to-game-special"),
checkboxMark = document.querySelectorAll(".checkmark"),
i_agree = document.querySelector("#i-agree"),
movetoGameBtnStandard = document.querySelector(".move-to-game")

let boxChecked = false;

movetoGameBtn.addEventListener("click", function(){
    if (!window.confirm(`고급 버전은 버그가 있을수 있으니 스탠다드 버전을 플레이하는 것을 추천드립니다. 그래도 계속하시겠습니까?`)) {
        return
    }

    if (agreeCheckbox.checked) {
        window.location.href = "./main_game/unstable.html"
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

movetoGameBtnStandard.addEventListener("click", function() {
    if (agreeCheckbox.checked) {
        window.location.href = "./main_game/stable.html"
    } else {
        alert("위의 체크박스를 눌러주세요.")
    }
})
