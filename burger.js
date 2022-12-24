const burgerElement = document.getElementById('header_burger')
const menuElement = document.getElementById('header_menu')

burgerElement.addEventListener('click', () => {
    burgerElement.classList.toggle('active')
    menuElement.classList.toggle('active')
    document.body.classList.toggle('lock')
})