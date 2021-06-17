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