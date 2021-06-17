import '../css/demo4.css'

const round = document.querySelector('.round')
round.addEventListener('mouseenter', function() {
    this.classList.add('active')
})
round.addEventListener('mouseleave', function() {
    this.classList.remove('active')
})