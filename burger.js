const burgerElement = document.getElementById('header_burger')
const menuElement = document.getElementById('header_menu')


burgerElement.addEventListener('click', () => {
    burgerElement.classList.toggle('active')
    menuElement.classList.toggle('active')
    if (menuElement.classList.contains('active')) {
        document.body.classList.add('lock')
    } else {
        document.body.classList.remove('lock')
    }
})

const searchElement = document.getElementById('form-search')
const searchMenu = document.getElementById('search_menu')

searchElement.addEventListener('click', () => {
    // searchMenu.classList.toggle('active')
    // if (searchMenu.classList.contains('search_menu')) {
    //     document.body.classList.add('lock')
    // } else {
    //     document.body.classList.remove('lock')
    // }
})
