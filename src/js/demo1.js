import '../css/demo1.css'

const btns = document.querySelector('#btns')
const number = document.querySelector('#number')


const on = (eventType, parent, seletor, fn) => {
    if (!(parent instanceof Element)) {
        parent = document.querySelector(parent)
    }
    parent.addEventListener(eventType, e => {
        let el = e.target
        while (!el.matches(seletor)) {
            if (parent === el) {
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el, e, el)
    })
    return parent
}

let n = localStorage.getItem('number') || 100
number.innerText = n

on('click', btns, '#add', e => {
    n++
    localStorage.setItem('number', n)
    number.innerText = n
})
on('click', btns, '#sub', e => {
    n--
    localStorage.setItem('number', n)
    number.innerText = n
})
on('click', btns, '#mul', e => {
    n *= 2
    localStorage.setItem('number', n)
    number.innerText = n
})
on('click', btns, '#division', e => {
    n /= 2
    localStorage.setItem('number', n)
    number.innerText = n
})