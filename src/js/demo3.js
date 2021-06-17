import '../css/demo3.css'

const square = document.querySelector('.square')
square.addEventListener('click', function() {
    this.classList.toggle('active')
})