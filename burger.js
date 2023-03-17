const burgerElement = document.getElementById('header_burger')
const menuElement = document.getElementById('header_menu')
const searchElement = document.getElementById('form-search')
const searchMenu = document.getElementById('search_menu')

burgerElement.addEventListener('click', () => {

    // НОВЫЙ РАСКЛАД

    if (burgerElement.classList.contains('active')) {
        document.body.classList.remove('lock');
        burgerElement.classList.remove('active');
        menuElement.classList.remove('active');
        searchMenu.classList.remove('active');
    } else {
        document.body.classList.add('lock');
        burgerElement.classList.add('active');
        menuElement.classList.add('active');
    }

    // СТАРЫЙ

    // burgerElement.classList.toggle('active')
    // menuElement.classList.toggle('active')
    // if (menuElement.classList.contains('active')) {
    //     document.body.classList.add('lock')
    // } else {
    //     document.body.classList.remove('lock')
    // }



})



searchElement.addEventListener('click', () => {
    // searchMenu.classList.toggle('active')
    // if (searchMenu.classList.contains('search_menu')) {
    //     document.body.classList.add('lock')
    // } else {
    //     document.body.classList.remove('lock')
    // }
})
