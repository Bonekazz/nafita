const main = document.querySelector(".main")
const menuBtn = document.querySelector(".menu-header-btn")
const shadowMenu = document.querySelector(".shadow")
const divMenu = document.querySelector(".nav-container")
let isMenuVisible = false



menuBtn.addEventListener("click", ShowMenu);
shadowMenu.addEventListener("click", ShowMenu);

function ShowMenu() {
    switch (isMenuVisible) {
        case false:
            main.style.filter = "blur(15px)"
            shadowMenu.style.display = "block"
            divMenu.style.right = "0px"
            isMenuVisible = true
            console.log(isMenuVisible)
            break
        case true:
            main.style.filter = "blur(0px)"
            shadowMenu.style.display = "none"
            divMenu.style.right = "-387px"
            isMenuVisible = false
            console.log(isMenuVisible)
            break
    }
    
}