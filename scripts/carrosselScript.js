const divBanner = document.querySelector(".div-banner-images")
let width = 0;
autoBanner(width)
setInterval(changeWidht, 7000)


function Carrousel(radio) {
   switch (radio) {
        case "radio1":
            width = 0
            divBanner.style.left = "0"
            break
        case "radio2":
            width = 100
            divBanner.style.left = "-100vw"
            break
        case "radio3":
            width = 200
            divBanner.style.left = "-200vw"
            break
        default:
            console.log("algo deu errado")
   }
}

function changeWidht() {
    width += 100
    if (width > 200) {
        width = 0
        autoBanner(width)
    } else {
        autoBanner(width)
    }
    
}

function autoBanner(width) {
    switch (width) {
        case 0:
            document.getElementById("radio1").checked = true
            divBanner.style.left = "0"
            break
        case 100:
            document.getElementById("radio2").checked = true;
            divBanner.style.left = "-100vw"
            break
        case 200:
            document.getElementById("radio3").checked = true;
            divBanner.style.left = "-200vw"
            break
        default:
            console.log(width)
   }
}


