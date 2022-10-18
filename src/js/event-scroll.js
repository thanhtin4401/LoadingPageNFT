

window.addEventListener("scroll", function () {
    let toTop = document.querySelector(".to-top")
    let header = document.querySelector("header")
    header.classList.toggle("sticky-nav", window.scrollY > 50)
    toTop.classList.toggle("active", window.scrollY > 50)
})