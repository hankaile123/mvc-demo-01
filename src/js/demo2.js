import '../css/demo2.css'

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

const tabbar = document.querySelector('.tabbar')
const tab = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.content')


on('click', tabbar, '.tab', e => {
    const index = e.target.dataset.index
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('current')
    }
    e.target.classList.add('current')

    for (let i = 0; i < content.length; i++) {
        content[i].classList.add('hide')
    }
    content[index].classList.remove('hide')
})

tab[0].click()