window.onload = function () { // можно также использовать window.addEventListener('load', (event) => {
    console.log('Страница загружена');
    download.style.display = 'none'
    const display = window.innerWidth
    if (display > 500) {
        wrapper.style.display = 'none'
    } else {
        wrapper.style.display = 'block'
    }
};

import {HEADERS} from "./data/maintenance.js";
import {ERRORS} from "./data/errors_list.js";
import {USEFUL} from "./data/useful.js";
import {ALIEXPRESS} from "./data/aliexpress.js";

// CONST
const download = document.querySelector('.download');
const wrapper = document.querySelector('.wrapper');
// const NEW_DATA = [];
const ALL_DETAILS = [];
let MY_DETAILS;
const BUTTON_STATUS = {
    ADD: {
        CLASS: 'detail_favorite_add detail_button',
        TEXT: 'Добавить'
    },
    DELETE: {
        CLASS: 'detail_favorite_delete detail_button',
        TEXT: 'Удалить'
    }
}
const usefulContainer = document.getElementById('usefulContainer');
const myFavorites = document.getElementById('my_favorites');
const aliexpressContainer = document.getElementById('aliexpress_container');
const moreContainer = document.getElementById('moreContainer');
const setSettings = document.getElementById('setSettings');
const setTheme = document.getElementById('theme');

// GET FROM LOCAL

const currentTheme = localStorage.getItem('theme');
const currentFontSize = localStorage.getItem('fontSize');
const currentView = localStorage.getItem('view');
const currentMyDetails = localStorage.getItem('myDetails');

const FROM_LOCAL = {
    CURRENT_THEME: localStorage.getItem("theme"),
    CURRENT_FONT_SIZE: localStorage.getItem('fontSize'),
    CURRENT_VIEW: localStorage.getItem('view'),
    MY_DETAILS: localStorage.getItem('myDetails'),
}

function addMyDetailsToLocal(itemsArray) {
    const items = JSON.stringify(itemsArray)
    localStorage.setItem('myDetails', items);
}

// РЕГИОН
let myCountry;

async function getCountry(e) {
    const o = ymaps.geolocation;
    myCountry = o.country;
    return myCountry
}

const SETTINGS = {
    THEME: currentTheme || 'original_theme',
    FONT_SIZE: currentFontSize || 'fontSizeM',
    VIEW: currentView || 'details_table',
    MY_DETAILS: currentMyDetails || '[]'
}

saveSettingsToLocal(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW, SETTINGS.MY_DETAILS)

function saveSettingsToLocal(theme, font, view, details) {
    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', font);
    localStorage.setItem('view', view);
    localStorage.setItem('myDetails', details);
    // setTheme.classList.add(theme);
}

render(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)

function render(theme, font, view) {
    setTheme.classList.add(theme);

    // Меняем тему
    setSettings.classList.add(theme);
    document.getElementById(theme).checked = true;

    // Меняем шрифт
    document.body.classList.add(font);
    setSettings.classList.add(font);
    document.getElementById(font).checked = true;

    // Меняем вид
    setSettings.classList.add(view);
    document.getElementById(view).checked = true;
}

const myDetailsInLocal = localStorage.getItem('myDetails');

function renderMyDetails() {
    MY_DETAILS = JSON.parse(myDetailsInLocal);

    if (MY_DETAILS.length) {
        // MY_DETAILS = JSON.parse(myDetailsInLocal);
        myFavorites.innerHTML = '';
        for (let el of MY_DETAILS) {
            createDetailCard(el, myFavorites,true,false,true, BUTTON_STATUS.DELETE, true, true)
            addedDetailsStatusToDomByPartNumber(el.detail_code);
        }
    } else {
        myFavorites.innerHTML = 'Сюда можно будет добавить и здесь будут отображаться выбранные детали :)';
        MY_DETAILS = [];
    }
}

// РЕНДЕРИМ ПОЛЕЗНОЕ
for (let el of USEFUL) {
    createElementInUseful(el, usefulContainer)
}

// РЕНДЕРИМ АЛИЭКСПРЕСС
for (let el of ALIEXPRESS) {
    createElementInAliexpress(el, aliexpressContainer)
}

createContentMenu(HEADERS);
renderMyDetails();
callAccord();

function createContentMenu(HEADERS) {
    const contentContainer = document.querySelector('.content_container');
    for (let headerInfo of HEADERS) {
        createHeaders(contentContainer, headerInfo);
    }
}

function createHeaders(contentContainer, headerInfo) {
    const contentHeader = document.createElement('div');
    contentHeader.className = 'content_header';

    const headerTitle = document.createElement('button');
    headerTitle.className = 'accordion';
    headerTitle.innerHTML = headerInfo.title;

    const panelElement = document.createElement('div');
    panelElement.className = 'panel';

    contentContainer.append(contentHeader);
    contentHeader.append(headerTitle);
    headerTitle.after(panelElement);

    if (headerInfo.subtitles) {
        createSubtitles(headerInfo.subtitles, panelElement)
    } else {
        headerTitle.disabled = true;
    }
}

function createSubtitles(headerSubtitles, panelElement) {

    for (let subTitle of headerSubtitles) {

        const headerSubtitle = document.createElement('button');
        headerSubtitle.className = 'accordion title'
        headerSubtitle.innerHTML = subTitle.subtitle;

        const newPanelElement = document.createElement('div');
        newPanelElement.className = 'panel';

        const containerItems = document.createElement('div');

        if (SETTINGS.VIEW === 'details_table') {
            containerItems.className = 'container_items_table';
        } else {
            containerItems.className = 'gallery js-flickity';
            containerItems.setAttribute('data-flickity-options', '{ "Parallax": true, "prevNextButtons": true, "pageDots": false }');
        }

        panelElement.append(headerSubtitle);
        headerSubtitle.after(newPanelElement);

        if (subTitle.details) {
            newPanelElement.append(containerItems);

            //ЗАМЕНА ТУТ
            // createDetails(subTitle.details, containerItems);
            createDetailsInContainer(subTitle.details, containerItems);
        }

        if (!subTitle.details && !subTitle.sub_subtitles) {
            headerSubtitle.disabled = true;
        }

        if (subTitle.sub_subtitles) {
            headerSubtitle.classList.add('frame');
            createSubSubtitles(subTitle.sub_subtitles, newPanelElement);
        }
    }
}

function createSubSubtitles(headerSubtitles, panelElement) {

    for (let subTitle of headerSubtitles) {

        const headerSubSubtitle = document.createElement('button');
        headerSubSubtitle.className = 'accordion title2'
        headerSubSubtitle.innerHTML = subTitle.sub_subtitle;

        const newPanelElement = document.createElement('div');
        newPanelElement.className = 'panel';

        // ВИД В ЗАВИСИМОСТИ ОТ НАСТРОЕК
        const containerItems = document.createElement('div');
        if (SETTINGS.VIEW === 'details_table') {
            containerItems.className = 'container_items_table';
        } else {
            containerItems.className = 'gallery js-flickity';
            containerItems.setAttribute('data-flickity-options', '{ "Parallax": true, "prevNextButtons": true, "pageDots": false }');
        }

        panelElement.append(headerSubSubtitle);
        headerSubSubtitle.after(newPanelElement);
        newPanelElement.append(containerItems);

        if (subTitle.details) {
            // ЗАМЕНА ТУТ
            // createDetails(subTitle.details, containerItems);
            createDetailsInContainer(subTitle.details, containerItems);
        } else {
            headerSubSubtitle.disabled = true;
        }
    }
}

function createDetailsInContainer (details, container) {

    for (let detail of details) {
        addDetailToAllDetailArray(detail)
        createDetailCard(detail, container, true, true, true, BUTTON_STATUS.ADD, false, true)
    }
}

// КОДЫ ОШИБОК В ПОИСКЕ
function createCodeInSearch(item, containerItem) {

    const headerSubtitle = document.createElement('button');
    headerSubtitle.className = 'accordion search_title'
    headerSubtitle.innerHTML = 'Ошибка ' + item.error_code.toUpperCase();

    const newPanelElement = document.createElement('div');
    newPanelElement.className = 'panel';

    const containerItems = document.createElement('div');
    containerItems.className = 'container_items_swipe';

    containerItem.append(headerSubtitle);
    headerSubtitle.after(newPanelElement);
    newPanelElement.append(containerItems);

    // РИСУЕМ ДЕТАЛЬ
    const containerDetail = document.createElement('div');
    containerDetail.className = `container_detail full_width more_modal_settings`;
    const detailInfo = document.createElement('div');
    detailInfo.className = 'error_info';

    if (item.error_info) {
        detailInfo.innerHTML = item.error_info;
    } else {
        detailInfo.innerHTML = '(!) Информация отсутствует';
    }

    containerItems.append(containerDetail);
    containerDetail.append(detailInfo);
}

// ДЕТАЛЬ В ПОИСКЕ - ЗДЕСЯ ДЕЛАЕМ
function createDetailInSearch(detail, containerItem) {
    const headerSubtitle = document.createElement('button');
    headerSubtitle.className = 'accordion search_title'
    headerSubtitle.innerHTML = detail.detail_info + ' ' + detail.detail_code;

    const newPanelElement = document.createElement('div');
    newPanelElement.className = 'panel';

    const containerItems = document.createElement('div');
    containerItems.className = 'container_items_swipe';
    containerItem.append(headerSubtitle);
    headerSubtitle.after(newPanelElement);
    newPanelElement.append(containerItems);

    // РИСУЕМ ДЕТАЛЬ
    createDetailCard(detail, containerItems, true, false, false, BUTTON_STATUS.ADD, true)
}

// ПОЛЕЗНОЕ В "ПОИСКЕ"

// АККОРДИОН
function callAccord() {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {

        acc[i].addEventListener("click", function () {

            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // panel.style.maxHeight = panel.scrollHeight + "px";
                // panel.style.maxHeight = '100%';
                panel.style.maxHeight = '2600px';
            }
        });
    }
}

// ОБРАБОТКА КЛИКОВ
window.onclick = function (event) {
    // event.preventDefault()
    const target = event.target; // где был клик?
    const isClick = target.className
    // let isCode = target.parentElement.parentElement.firstElementChild.firstElementChild.textContent
    const isCode = target.parentElement.parentElement.firstElementChild.firstElementChild

    switch (isClick) {

        // ДЕТАЛЬ - СХЕМА
        case 'detail_scheme detail_button':
            const imageElement = target.parentElement.parentElement.firstElementChild.nextElementSibling
            if (target.textContent === 'На схеме') {
                target.textContent = 'Деталь';
                imageElement.firstElementChild.hidden = true;
                imageElement.lastElementChild.hidden = false;

            } else {
                target.textContent = 'На схеме';
                imageElement.firstElementChild.hidden = false;
                imageElement.lastElementChild.hidden = true;
            }
            break

        // СТОИМОСТЬ
        case 'detail_price detail_button':
            getCountry().then()

            if (myCountry === 'Беларусь') {
                window.open(`https://www.zap.by/carparts/search/${isCode.textContent}`, "_blank");
            }

            if (myCountry === 'Россия') {
                window.open(`https://www.zzap.ru/public/search.aspx#rawdata=${isCode.textContent}`, "_blank");
            }
            break

        // ДОБАВИТЬ
        case 'detail_favorite_add detail_button':
            // const isCode = target.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            const foundDetail = findDetailInAllDetailsArray(isCode.textContent);
            target.className = BUTTON_STATUS.DELETE.CLASS;
            target.textContent = BUTTON_STATUS.DELETE.TEXT;
            MY_DETAILS.push(foundDetail)
            // ПЕРЕРИСОВАТЬ МОИ ДЕТАЛИ
            addedDetailsStatusToDomByPartNumber(isCode.textContent);
            addMyDetailsToLocal(MY_DETAILS)

            myFavorites.innerHTML = '';
            for (let el of MY_DETAILS) {
                createDetailCard(el, myFavorites,true,false,true, BUTTON_STATUS.DELETE, true, true)
            }
            break

        // УДАЛИТЬ
        case 'detail_favorite_delete detail_button':
            // const isCode = target.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            target.className = BUTTON_STATUS.ADD.CLASS;
            target.textContent = BUTTON_STATUS.ADD.TEXT;
            deleteDetailFromArray(isCode.textContent, MY_DETAILS);
            addMyDetailsToLocal(MY_DETAILS)

            // ПЕРЕРИСОВАТЬ МОИ ДЕТАЛИ
            deleteAddedDetailsStatusToDomByPartNumber(isCode.textContent)

            if (!MY_DETAILS.length) {
                myFavorites.innerHTML = 'Сюда можно добавить и здесь будут отображаться выбранные детали :)'
                return;
            }
            myFavorites.innerHTML = '';
            for (let el of MY_DETAILS) {
                createDetailCard(el, myFavorites,true,false,true, BUTTON_STATUS.DELETE, true, true)
            }
            break

        // ПОДРОБНЕЕ + МОДАЛКА
        case 'detail_more detail_button js-open-modal':
            document.body.classList.add('lock');
            // const isCode = target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
            const foundElement = findDetailInAllDetailsArray(isCode.textContent)
            moreContainer.innerHTML = '';
            createDetailCard(foundElement, moreContainer, true, false, false, BUTTON_STATUS.ADD, true)
            break

        default:
            break
    }

    // СБРОС НАСТРОЕК
};

// ПОИСК
const inputText = document.getElementById('search')
const searchElementsList = document.getElementById('search_menu')

inputText.oninput = function () {

    const substring = inputText.value.toLowerCase();

    if (!substring) {
        searchElementsList.innerHTML = '';
        searchElementsList.classList.remove('active')
        burgerElement.classList.remove('active')
        callAccord();
        return
    }

    burgerElement.classList.add('active')
    searchElementsList.classList.add('active');
    menuElement.classList.remove('active');
    searchElementsList.innerHTML = '';

    if (substring[0] === 'p') {
       findErrorInArray(substring);
       callAccord();
       return;
    }

    findObjectInArray(substring);
    findObjectInUseful(substring);
    findObjectInAliexpress(substring);
    callAccord();
}

function findErrorInArray(item) {
    for (let el of ERRORS) {
        if (el.error_code.includes(item)) {
            createCodeInSearch(el, searchElementsList)
        }
    }
}

function findObjectInArray(item) {
    for (let el of ALL_DETAILS) {
        if (el.detail_info.includes(item) || el.detail_code.includes(item)) {
            createDetailInSearch(el, searchElementsList)
        }
    }
}

function findObjectInUseful(item) {
    for (let el of USEFUL) {
        if (el.title.toLowerCase().includes(item)) {
            createElementInUseful(el, searchElementsList)
        }
    }
}

function findObjectInAliexpress(item) {
    for (let el of ALIEXPRESS) {
        if (el.title.toLowerCase().includes(item)) {
            createElementInAliexpress(el, searchElementsList)
        }
    }
}

// МНОГО МОДАЛОК

checkClick();

function checkClick() {
    document.addEventListener('DOMContentLoaded', function () {

        /* Записываем в переменные массив элементов-кнопок и подложку.
           Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
        const modalButtons = document.querySelectorAll('.js-open-modal'),
            overlay = document.querySelector('.js-overlay-modal'),
            closeButtons = document.querySelectorAll('.js-modal-close');

        /* Перебираем массив кнопок */
        modalButtons.forEach(function (item) {

            /* Назначаем каждой кнопке обработчик клика */
            item.addEventListener('click', function (e) {

                /* Предотвращаем стандартное действие элемента. Так как кнопку разные
                   люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
                   Нужно подстраховаться. */
                e.preventDefault();

                /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
                   и будем искать модальное окно с таким же атрибутом. */
                const modalId = this.getAttribute('data-modal'),
                    modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

                /* После того как нашли нужное модальное окно, добавим классы
                   подложке и окну чтобы показать их. */
                modalElem.classList.add('active');
                overlay.classList.add('active');
            }); // end click

        }); // end foreach

        closeButtons.forEach(function (item) {

            item.addEventListener('click', function (event) {

                const parentModal = this.closest('.modal');
                parentModal.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('lock');
            });
        }); // end foreach

        document.body.addEventListener('keyup', function (e) {
            const key = e.keyCode;
            if (key === 27) {
                document.querySelector('.modal.active').classList.remove('active');
                document.querySelector('.overlay').classList.remove('active');
            }
        }, false);

        // overlay.addEventListener('click', function() {
        //     document.querySelector('.modal.active').classList.remove('active');
        //     this.classList.remove('active');
        // });
    }); // end ready
}

// СМЕНА НАСТРОЕК

function addDetailToAllDetailArray(item) {
    if (!ALL_DETAILS.some(e => e.detail_code === item.detail_code)) {
        item.detail_info = item.detail_info.toLowerCase();
        ALL_DETAILS.push(item);
    }
}

// РИСУЕМ ДЕТАЛЬ В МОИ ЗАПЧАСТИ

function findDetailInAllDetailsArray(item) {
    for (let el of ALL_DETAILS) {
        if (el.detail_code.includes(item)) {
            return el
        }
    }
}

function deleteDetailFromArray(code, array) {
    for (let el of array) {
        if (el.detail_code === code) {
            array.splice(array.indexOf(el), 1);
            return array
        }
    }
}

// РИСУЕМ НОВЫЙ ЭЛЕМЕНТ
function createDetailCard(item, container, priceButton, moreButton, addButton, addButtonStatus, imageButton, table) {

    const detailContainer = document.createElement('div');
    if (table) {
        detailContainer.className = 'container_detail_table';
    } else {
        detailContainer.className = 'container_detail';
    }
    container.append(detailContainer)

    const detailCodeAndManufacturer = document.createElement('div');
    detailCodeAndManufacturer.className = 'detail_code';
    detailContainer.append(detailCodeAndManufacturer);

    const detailCode = document.createElement('div');
    detailCode.className = 'part_number'
    detailCode.textContent = item.detail_code;
    detailCodeAndManufacturer.append(detailCode);

    if (item.detail_manufacturer) {
        const detailManufacturer = document.createElement('div');
        detailManufacturer.textContent = `(${item.detail_manufacturer})`;
        detailCodeAndManufacturer.append(detailManufacturer);
    }

    const detailImages = document.createElement('div');
    detailImages.className = 'detail_image';
    detailContainer.append(detailImages);

    const detailImage = document.createElement('img');
    detailImage.src = item.detail_image;
    detailImages.append(detailImage);

    const detailScheme = document.createElement('img');
    if (item.detail_scheme) {
        detailScheme.src = item.detail_scheme;
        detailScheme.hidden = true
        detailImages.append(detailScheme);
    }

    const detailInfo = document.createElement('div');
    detailInfo.className = 'detail_info';
    detailInfo.textContent = item.detail_info;
    detailContainer.append(detailInfo);

    if (!table) {
        const detailDescription = document.createElement('div');
        detailDescription.textContent = item.detail_more;
        detailInfo.append(detailDescription);
    }

    const detailOptions = document.createElement('div');
    if (table) {
        detailOptions.className = 'detail_options add_wrap';
    } else {
        detailOptions.className = 'detail_options';
    }

    detailContainer.append(detailOptions);

    if (priceButton) {
        const detailPriceButton = document.createElement('div');
        detailPriceButton.className = 'detail_price detail_button';
        detailPriceButton.textContent = 'Стоимость';
        detailOptions.append(detailPriceButton);
    }

    if (moreButton) {
        const detailMoreButton = document.createElement('div');
        detailMoreButton.className = 'detail_more detail_button js-open-modal';
        detailMoreButton.setAttribute('data-modal', '11')
        detailMoreButton.textContent = 'Подробнее';
        detailOptions.append(detailMoreButton);
    }

    if (imageButton && item.detail_scheme) {
        const detailImageOrSchemeButton = document.createElement('div');
        detailImageOrSchemeButton.className = 'detail_scheme detail_button';
        detailImageOrSchemeButton.textContent = 'На схеме';
        detailOptions.append(detailImageOrSchemeButton);
    }

    if (addButton) {
        const detailAddOrDeleteButton = document.createElement('div');
        detailAddOrDeleteButton.className = addButtonStatus.CLASS;
        detailAddOrDeleteButton.textContent = addButtonStatus.TEXT;
        detailOptions.append(detailAddOrDeleteButton);
    }
}

// МЕНЯЕМ СТАТУС ДОБАВИТЬ/УДАЛИТЬ В DOM
function deleteAddedDetailsStatusToDomByPartNumber (item) {
    const findCodes = document.getElementsByClassName('part_number')
    for (let el of findCodes) {
        if (el.innerHTML === item) {
            const button = el.parentElement.parentElement.lastElementChild.lastElementChild;
            button.className = BUTTON_STATUS.ADD.CLASS;
            button.innerHTML = BUTTON_STATUS.ADD.TEXT;
        }
    }
}

function addedDetailsStatusToDomByPartNumber (item) {
    const findCodes = document.getElementsByClassName('part_number')
    for (let el of findCodes) {
        if (el.innerHTML === item) {
            const button = el.parentElement.parentElement.lastElementChild.lastElementChild;
            button.className = BUTTON_STATUS.DELETE.CLASS;
            button.innerHTML = BUTTON_STATUS.DELETE.TEXT;
        }
    }
}

// СОЗДАЕМ ЭЛЕМЕНТ В "ПОЛЕЗНОЕ"
function createElementInUseful(item, container) {
    const accordionElement = document.createElement('button');
    accordionElement.className = 'accordion search_title';
    accordionElement.innerHTML = item.title;
    container.append(accordionElement);

    const panelElement = document.createElement('div');
    panelElement.className = 'panel';
    container.append(panelElement);

    const containerElement = document.createElement('div');
    containerElement.className = 'container_detail more_modal_settings';
    panelElement.append(containerElement);

    for (let el of item.images_links) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'detail_image';
        containerElement.append(imageContainer);

        const imageElement = document.createElement('img');
        imageElement.src = el;
        imageContainer.append(imageElement);
    }

    if (item.about) {
        const aboutElement = document.createElement('p');
        aboutElement.textContent = item.about;
        containerElement.append(aboutElement);
    }
}

// ЭЛЕМЕНТ В "ПЛЮШКИ"
function createElementInAliexpress(item, container) {
    const accordionElement = document.createElement('button');
    accordionElement.className = 'accordion search_title';
    accordionElement.innerHTML = item.title;
    container.append(accordionElement);

    const panelElement = document.createElement('div');
    panelElement.className = 'panel';
    container.append(panelElement);

    const containerElement = document.createElement('div');
    containerElement.className = 'container_detail more_modal_settings';
    panelElement.append(containerElement);

    const imageContainer = document.createElement('div');
    imageContainer.className = 'detail_image';
    containerElement.append(imageContainer);

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageContainer.append(imageElement);

    if (item.about) {
        const aboutElement = document.createElement('p');
        aboutElement.textContent = item.about;
        containerElement.append(aboutElement);
    }

    if (item.link_product) {
        const buttonLink = document.createElement('a');
        buttonLink.href = item.link_product;
        const buttonElement = document.createElement('button');
        buttonElement.className = 'link_button';
        buttonElement.textContent = 'AliExpress';
        containerElement.append(buttonLink);
        buttonLink.append(buttonElement);
    }

    if (item.link_more) {
        const buttonLink = document.createElement('a');
        buttonLink.href = item.link_more;
        const buttonElement = document.createElement('button');
        buttonElement.className = 'link_button';
        buttonElement.textContent = 'Подробнее';
        containerElement.append(buttonLink);
        buttonLink.append(buttonElement);
    }
}
