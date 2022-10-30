let moon = document.querySelector(".moon")
let text = document.querySelector(".text-paralax")
let mountainsFront = document.querySelector(".mountains_front")
let mountainsBehind = document.querySelector('.mountains_behind')
let star = document.querySelector('.stars')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    moon.style.top = value * 0.6 + 'px'
    star.style.left = value * 1 + 'px'
    text.style.marginRight = value * 2 + 'px'
    text.style.marginTop = value * 0.4 + 'px'
    mountainsBehind.style.top = value * 0.5 + 'px'
    mountainsFront.style.top = value * 0.3 + 'px'
})