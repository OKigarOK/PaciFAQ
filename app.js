window.onload = function () { // можно также использовать window.addEventListener('load', (event) => {
    console.log('Страница загружена');
    download.style.display = 'none'
    wrapper.style.display = 'block'
};

import {HEADERS} from "./data/maintenance.js";
import {ERRORS} from "./data/errors_list.js";

// CONST
const download = document.querySelector('.download');
const wrapper = document.querySelector('.wrapper');
const NEW_DATA = [];
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
const myFavorites = document.getElementById('my_favorites');
const moreContainer = document.getElementById('moreContainer')
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
    console.log(o);
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

// let NEW_FAVORITES;

const myDetailsInLocal = localStorage.getItem('myDetails');

function renderMyDetails() {
    MY_DETAILS = JSON.parse(myDetailsInLocal);

    if (MY_DETAILS.length) {
        // MY_DETAILS = JSON.parse(myDetailsInLocal);
        myFavorites.innerHTML = '';
        for (let el of MY_DETAILS) {
            createDetailCard(el, myFavorites,true,false,true, BUTTON_STATUS.DELETE, true, true)
            addedDetailsStatusToDomByPartNumber(el.detail_code);
            console.log(el);
        }
    } else {
        myFavorites.innerHTML = 'Сюда можно будет добавить и здесь будут отображаться выбранные детали :)';
        MY_DETAILS = [];
    }
}

createContentMenu(HEADERS);
renderMyDetails();
// renderSettings();
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

// КОДЫ ОШИБОК

function createCodeInSearch(item, containerItem) {

    const headerSubtitle = document.createElement('button');
    headerSubtitle.className = 'accordion search_title'
    headerSubtitle.innerHTML = 'Ошибка ' + item.error_code;

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

// ДЕТАЛЬ В ПОИСКЕ

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
    setElement(detail, containerItems);

    // РИСУЕМ ДЕТАЛЬ

    function setElement(detail, elementContainer) {
        const containerDetail = document.createElement('div');
        containerDetail.className = `container_detail more_modal_settings`;

        const detailImage = document.createElement('div');
        detailImage.className = 'detail_image';

        const schemeImage = document.createElement('img');
        schemeImage.src = detail.detail_image;
        detailImage.append(schemeImage);

        const schemeElement = document.createElement('img');
        if (detail.detail_scheme) {
            schemeElement.src = detail.detail_scheme;
        }

        schemeElement.hidden = true;
        detailImage.append(schemeElement);

        // НОВЬЁ

        const detailCode = document.createElement('div');
        detailCode.className = 'detail_code';

        detailCode.textContent = detail.detail_code;
        if (detail.detail_manufacturer) {
            detailCode.textContent += ` (${detail.detail_manufacturer})`
        }

        const detailInfo = document.createElement('div');
        detailInfo.className = 'detail_info';
        detailInfo.innerHTML = detail.detail_info;

        const detailAbout = document.createElement('div');
        detailAbout.className = 'detail_info';
        detailAbout.innerHTML = detail.detail_more;

        const detailOptions = document.createElement('div');
        detailOptions.className = 'detail_options';

        const detailPrice = document.createElement('div');
        detailPrice.className = 'detail_price detail_button';
        detailPrice.textContent = 'Стоимость';
        elementContainer.append(containerDetail);
        containerDetail.append(detailCode);
        containerDetail.append(detailImage);
        containerDetail.append(detailInfo);
        containerDetail.append(detailAbout);
        containerDetail.append(detailOptions);
        detailOptions.append(detailPrice);

        if (detail.detail_more) {
            const detailMore = document.createElement('div');
            detailMore.className = 'detail_more detail_button js-open-modal';
            detailMore.setAttribute('data-modal', '11');
        }

        if (detail.detail_scheme) {
            const detailScheme = document.createElement('div');
            detailScheme.className = 'detail_scheme detail_button';
            detailScheme.textContent = 'На схеме';
            detailOptions.append(detailScheme);
        }

        const detailFavorite = document.createElement('div');

        detailFavorite.className = 'detail_favorite_add detail_button';
        detailFavorite.textContent = 'Добавить';

        for (let favoriteItem of NEW_FAVORITES) {
            if (favoriteItem.detail_code === detail.detail_code) {
                detailFavorite.className = 'detail_favorite_delete detail_button';
                detailFavorite.textContent = 'Удалить';
            }
        }

        if (NEW_FAVORITES.length === 0) {
            detailFavorite.className = 'detail_favorite_add detail_button';
            detailFavorite.textContent = 'Добавить';
        }

        detailOptions.append(detailFavorite);
    }
}

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
            // const isCode = target.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            console.log(isCode);

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
            // isClick = BUTTON_STATUS.DELETE.CLASS;

            target.className = BUTTON_STATUS.DELETE.CLASS;
            target.textContent = BUTTON_STATUS.DELETE.TEXT;
            MY_DETAILS.push(foundDetail)
            console.log(MY_DETAILS);
            // ПЕРЕРИСОВАТЬ МОИ ДЕТАЛИ
            addedDetailsStatusToDomByPartNumber(isCode.textContent);
            console.log(isCode.textContent);
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

            console.log(MY_DETAILS);
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
    // if (target.id === 'reset_settings') {
    //     SETTINGS.VIEW = 'details_table';
    //     SETTINGS.THEME = 'original_theme';
    //     SETTINGS.FONT_SIZE = 'fontSizeM';
    //
    //     const originalTheme = document.getElementById('original_theme');
    //     const lightTheme = document.getElementById('light_theme');
    //     const darkTheme = document.getElementById('dark_theme');
    //     originalTheme.checked = true;
    //     lightTheme.checked = false;
    //     darkTheme.checked = false;
    //     clearThemeClass();
    //     setTheme.classList.add(SETTINGS.THEME);
    //     setSettings.classList.add(SETTINGS.THEME);
    //     localStorage.setItem('theme', SETTINGS.THEME);
    //
    //     const fontSizeS = document.getElementById('fontSizeS');
    //     const fontSizeM = document.getElementById('fontSizeM');
    //     const fontSizeL = document.getElementById('fontSizeL');
    //     fontSizeS.checked = false;
    //     fontSizeM.checked = true;
    //     fontSizeL.checked = false;
    //     clearFontClasses();
    //     setSettings.classList.add(SETTINGS.FONT_SIZE);
    //     document.body.classList.add(SETTINGS.FONT_SIZE);
    //     localStorage.setItem('fontSize', SETTINGS.FONT_SIZE);
    //
    //     const detailsListElement = document.getElementById('details_list');
    //     const detailsTableElement = document.getElementById('details_table');
    //     detailsTableElement.checked = false;
    //     detailsListElement.checked = true;
    //     localStorage.setItem('myDetails', '')
    //     location.reload();
    //     localStorage.setItem('view', SETTINGS.VIEW);
    // }

};

// !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// SEARCH

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

    findObjectInArray(substring);
    callAccord();
}

function findObjectInArray(item) {

    console.log(item);

    searchElementsList.innerHTML = '';

    for (let el of NEW_DATA) {
        if (el.detail_info.includes(item)) {
            createDetailInSearch(el, searchElementsList)
        }
    }

    for (let el of ERRORS) {
        if (el.error_code.includes(item)) {
            createCodeInSearch(el, searchElementsList)
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
                console.log(parentModal);
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

function renderSettings() {
    const allInputs = document.querySelectorAll('input');

    for (let elem of allInputs) {
        elem.addEventListener('click', () => {

            const detailsListElement = document.getElementById('details_list');
            const detailsTableElement = document.getElementById('details_table');

            // СМЕНА ТЕМЫ //
            if (elem.name === 'theme') {
                clearThemeClass();
                setTheme.classList.add(`${elem.id}`);
                setSettings.classList.add(`${elem.id}`);
                localStorage.setItem('theme', `${elem.id}`);
            }

            // СМЕНА ШРИФТА //
            if (elem.name === 'fontSize') {
                clearFontClasses();
                setSettings.classList.add(`${elem.id}`);
                document.body.classList.add(`${elem.id}`);
                localStorage.setItem('fontSize', `${elem.id}`);

                // если S только ТАБЛИЦА
                if (elem.id === 'fontSizeS') {
                    detailsListElement.checked = false;
                    detailsListElement.disabled = true;
                    detailsTableElement.checked = true;
                    detailsTableElement.disabled = false;
                    removeDetailsWrapView();
                    removeFullView();
                    localStorage.setItem('view', 'details_table');
                }

                // если M тогда ДВА варианта
                if (elem.id === 'fontSizeM') {
                    detailsTableElement.disabled = false;
                    detailsListElement.disabled = false;
                    if (localStorage.getItem('view') === 'details_table') {
                        addDetailsWrapView();
                    } else {
                        removeDetailsWrapView();
                    }
                }

                // если L только СПИСОК
                if (elem.id === 'fontSizeL') {
                    detailsTableElement.checked = false;
                    detailsTableElement.disabled = true;
                    detailsListElement.checked = true;
                    detailsListElement.disabled = false;
                    removeDetailsWrapView();
                    addFullView();
                    localStorage.setItem('view', 'details_list');
                }
            }

            // СМЕНА ВИДА //
            if (elem.name === 'view') {
                localStorage.setItem('view', `${elem.id}`);
                location.reload();
            }
        })
    }
}

function clearThemeClass() {
    setTheme.classList.remove('dark_theme');
    setTheme.classList.remove('light_theme');
    setTheme.classList.remove('original_theme');
    setSettings.classList.remove('dark_theme');
    setSettings.classList.remove('light_theme');
    setSettings.classList.remove('original_theme');
}

function clearFontClasses() {
    setSettings.classList.remove('fontSizeS');
    setSettings.classList.remove('fontSizeM');
    setSettings.classList.remove('fontSizeL');
    document.body.classList.remove('fontSizeS');
    document.body.classList.remove('fontSizeM');
    document.body.classList.remove('fontSizeL');
}

function addFullView() {
    const allElements = document.querySelectorAll('.container_detail')
    for (let item of allElements) {
        item.classList.add('full_width');
    }
}

function removeFullView() {
    const allElements = document.querySelectorAll('.container_detail')
    for (let item of allElements) {
        item.classList.remove('full_width');
    }
}

function addDetailsWrapView() {
    const allElements = document.querySelectorAll('.detail_options')
    for (let item of allElements) {
        item.classList.add('detail_options_wrap');
    }
}

function removeDetailsWrapView() {
    const allElements = document.querySelectorAll('.detail_options')
    for (let item of allElements) {
        item.classList.remove('detail_options_wrap')
    }
}

function addDetailToAllDetailArray(item) {
    if (!NEW_DATA.some(e => e.detail_code === item.detail_code)) {
        item.detail_info = item.detail_info.toLowerCase();
        NEW_DATA.push(item);
    }
}

// РИСУЕМ ДЕТАЛЬ В МОИ ЗАПЧАСТИ

function checkDetailInFavoriteArray(itemCode) {

}

function findDetailInAllDetailsArray(item) {
    for (let el of NEW_DATA) {
        if (el.detail_code.includes(item)) {
            return el
        }
    }
}

function createElementsInMyDetails () {

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
            const button = el.parentElement.parentElement.lastElementChild.lastElementChild
            button.className = BUTTON_STATUS.ADD.CLASS
            button.innerHTML = BUTTON_STATUS.ADD.TEXT
        }
    }
}

function addedDetailsStatusToDomByPartNumber (item) {
    const findCodes = document.getElementsByClassName('part_number')
    for (let el of findCodes) {
        if (el.innerHTML === item) {
            const button = el.parentElement.parentElement.lastElementChild.lastElementChild
            button.className = BUTTON_STATUS.DELETE.CLASS
            button.innerHTML = BUTTON_STATUS.DELETE.TEXT
        }
    }
}
