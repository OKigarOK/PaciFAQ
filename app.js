import {HEADERS} from "./data/maintenance.js";
import {ERRORS} from "./data/errors_list.js";

const FAVORITES = [];
const NEW_DATA = [];
const myFavorites = document.getElementById('favorites');
const currentTheme = localStorage.getItem('theme');
const currentFontSize = localStorage.getItem('fontSize');
const currentView = localStorage.getItem('view');
// const isFavorites = localStorage.getItem('favorites');

const setSettings = document.getElementById('setSettings');
const setTheme = document.getElementById('theme');

const SETTINGS = {
    THEME: currentTheme || 'original_theme',
    FONT_SIZE: currentFontSize || 'fontSizeM',
    VIEW: currentView || 'details_table'
}

saveSettingsToLocal(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)

function saveSettingsToLocal(theme, font, view) {
    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', font);
    localStorage.setItem('view', view);
    setTheme.classList.add(theme);
}

render(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)

function render(theme, font, view) {
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

// function renderContentMenu() {
//     const contentContainer = document.querySelector('.content_container');
//     contentContainer.innerHTML = '';
//     saveSettingsToLocal(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)
//     render(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)
//     createContentMenu(HEADERS);
//     renderSettings();
//     callAccord();
// }

createContentMenu(HEADERS)
renderSettings();
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
            createDetails(subTitle.details, containerItems);
        }

        if (!subTitle.details && !subTitle.sub_subtitles) {
            headerSubtitle.disabled = true;
        }

        if (subTitle.sub_subtitles) {
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
            createDetails(subTitle.details, containerItems);
        } else {
            headerSubSubtitle.disabled = true;
        }
    }
}

function createDetails(subTitleDetails, containerItems) {

    for (let detail of subTitleDetails) {

        // Новый массив с проверкой
        addElementToDataArray(detail);

        const containerDetail = document.createElement('div');
        if (SETTINGS.VIEW === 'details_table') {
            containerDetail.className = 'container_detail_table';
        } else {
            containerDetail.className = 'container_detail gallery-cell';
        }

        containerDetail.setAttribute('id' , `${detail.detail_code}` );
        detail.detail_id = detail.detail_code;

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

        const detailInfo = document.createElement('div');
        detailInfo.className = 'detail_info';
        detailInfo.innerHTML = detail.detail_info;

        // detailInfo.innerHTML = detail.detail_more;


        const detailCode = document.createElement('div');
        detailCode.className = 'detail_code';
        // detailCode.textContent = detail.detail_code + ` (${detail.detail_manufacturer})`;

        detailCode.textContent = detail.detail_code;
        if (detail.detail_manufacturer) {
            detailCode.textContent += ` (${detail.detail_manufacturer})`
        }

        const detailOptions = document.createElement('div');
        if ((SETTINGS.VIEW === 'details_table') && (SETTINGS.FONT_SIZE === 'fontSizeM')) {
            detailOptions.className = 'detail_options detail_options_wrap';
        } else {
            detailOptions.className = 'detail_options';
        }

        const detailPrice = document.createElement('div');
        detailPrice.className = 'detail_price detail_button';
        detailPrice.textContent = 'Стоимость';

        containerItems.append(containerDetail);
        containerDetail.append(detailCode);
        containerDetail.append(detailImage);
        containerDetail.append(detailInfo);
        containerDetail.append(detailOptions);
        detailOptions.append(detailPrice);

            const detailMore = document.createElement('div');
            detailMore.className = 'detail_more detail_button js-open-modal';
            detailMore.setAttribute('data-modal', '11');
            detailMore.textContent = 'Подробнее';
            detailOptions.append(detailMore);

        if (detail.detail_scheme && (SETTINGS.VIEW === 'details_list')) {
            const detailScheme = document.createElement('div');
            detailScheme.className = 'detail_scheme detail_button';
            detailScheme.textContent = 'На схеме';
            detailOptions.append(detailScheme);
        }
    }
}

// КОДЫ ОШИБОК

function createCodeInSearch (item, containerItem) {

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

function createDetailInSearch (detail, containerItem) {
            const headerSubtitle = document.createElement('button');
            headerSubtitle.className = 'accordion search_title'
            headerSubtitle.innerHTML = detail.detail_info +' '+ detail.detail_code;

            const newPanelElement = document.createElement('div');
            newPanelElement.className = 'panel';

            const containerItems = document.createElement('div');
            containerItems.className = 'container_items_swipe';
            containerItem.append(headerSubtitle);
            headerSubtitle.after(newPanelElement);
            newPanelElement.append(containerItems);
            setElement(detail, containerItems);

            // РИСУЕМ ДЕТАЛЬ

    function setElement (detail, elementContainer) {
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

        const detailInfo = document.createElement('div');
        detailInfo.className = 'detail_info';
        detailInfo.innerHTML = detail.detail_more;

        const detailCode = document.createElement('div');
        detailCode.className = 'detail_code';
        // detailCode.textContent = detail.detail_code + ` (${detail.detail_manufacturer})`;

        detailCode.textContent = detail.detail_code;
        if (detail.detail_manufacturer) {
            detailCode.textContent += ` (${detail.detail_manufacturer})`
        }

        const detailOptions = document.createElement('div');
        detailOptions.className = 'detail_options';

        const detailPrice = document.createElement('div');
        detailPrice.className = 'detail_price detail_button';
        detailPrice.textContent = 'Стоимость';
        elementContainer.append(containerDetail);
        containerDetail.append(detailCode);
        containerDetail.append(detailImage);
        containerDetail.append(detailInfo);
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

window.onclick = function(event) {
    event.preventDefault();
    const target = event.target; // где был клик?
    // console.log(target);
    const isClick = target.className;

    if (isClick === 'detail_scheme detail_button') {
        const imageElement = target.parentElement.previousElementSibling.previousElementSibling;

        if (target.textContent === 'На схеме') {
            target.textContent = 'Деталь';
            imageElement.firstElementChild.hidden = true;
            imageElement.lastElementChild.hidden = false;

        } else {
            target.textContent = 'На схеме';
            imageElement.firstElementChild.hidden = false;
            imageElement.lastElementChild.hidden = true;
        }
    }
    if (isClick === 'detail_price detail_button') {
        console.log('СТОИМОСТЬ В МОДАЛКЕ');

        const idElement = target.parentElement.parentElement.id;
        console.log(target.parentElement.parentElement.id);

        if (!FAVORITES.includes(idElement)) {
            // ПУШИМ ЭЛЕМЕНТ
            FAVORITES.push(idElement);

            // ДОБАВЛЯЕМ В ДОМ
            console.log(FAVORITES);
            const divElem = document.createElement('h3');
            divElem.innerText = idElement;
            // myFavorites.append(divElem);

            const myFavorites = document.getElementById('my_favorites');


        }
    }

    if (isClick === 'modal__cross js-modal-close') {
        console.log('ЗАКРЫТЬ ПОДРОБНЕЕ');
    }

    // СБРОС НАСТРОЕК

    if (target.id === 'reset_settings') {
        SETTINGS.VIEW = 'details_table';
        SETTINGS.THEME = 'original_theme';
        SETTINGS.FONT_SIZE = 'fontSizeM';

        const originalTheme = document.getElementById('original_theme');
        const lightTheme = document.getElementById('light_theme');
        const darkTheme = document.getElementById('dark_theme');
        originalTheme.checked = true;
        lightTheme.checked = false;
        darkTheme.checked = false;
        clearThemeClass();
        setTheme.classList.add(SETTINGS.THEME);
        setSettings.classList.add(SETTINGS.THEME);
        localStorage.setItem('theme', SETTINGS.THEME);

        const fontSizeS = document.getElementById('fontSizeS');
        const fontSizeM = document.getElementById('fontSizeM');
        const fontSizeL = document.getElementById('fontSizeL');
        fontSizeS.checked = false;
        fontSizeM.checked = true;
        fontSizeL.checked = false;
        clearFontClasses();
        setSettings.classList.add(SETTINGS.FONT_SIZE);
        document.body.classList.add(SETTINGS.FONT_SIZE);
        localStorage.setItem('fontSize', SETTINGS.FONT_SIZE);

        const detailsListElement = document.getElementById('details_list');
        const detailsTableElement = document.getElementById('details_table');
        detailsTableElement.checked = false;
        // detailsTableElement.disabled = true;

        detailsListElement.checked = true;
        // detailsListElement.disabled = false;

        location.reload();
        localStorage.setItem('view', SETTINGS.VIEW);
    }

    // МОДАЛКА ПОДРОБНЕЕ

    const targetElementId = target.parentElement.parentElement.id;

    if (!targetElementId) return

    // const clickElement = NEW_DATA.find(elem => elem.detail_id === targetElementId)

    // ID - число при формировании

    switch (target.className) {

        case 'detail_price detail_button':
            // console.log('смотрим ЦЕНУ');
            // console.log(targetElementId);

            // ДОБАВЛЯЕМ В ИЗБРАННОЕ

            if (FAVORITES.includes(targetElementId)) {
                // console.log('такое уже есть )');
            } else {
                console.log('ТЫЦ');
                // FAVORITES.push(targetElementId);
                localStorage.setItem('favorites', FAVORITES.push(targetElementId.toString()));
                const divElem = document.createElement('h3');
                divElem.innerText = targetElementId;
                myFavorites.append(divElem)
            }

            // console.log(FAVORITES);
            // addDetailToFavorites()

            // console.log(targetElementId);
            break

        case 'detail_more detail_button js-open-modal':
            // console.log('смотрим ПОДРОБНЕЕ');
            // console.log(targetElementId); // ID элемента
            const detail = NEW_DATA.find(elem => elem.detail_id === targetElementId)
            // console.log(detail);  // Объект ЭЛЕМЕНТА
            const elementContainer = document.querySelector('.modal.active')

            // console.log(elementContainer); // Вход в МОДАЛКУ

            elementContainer.lastChild.remove();
            document.body.classList.add('lock');

            // ЗДЕСЬ МОЖНО СТРОИТЬ МОДАЛКУ ПОДРОБНЕЕ

            const containerDetail = document.createElement('div');
            containerDetail.className = `container_detail more_modal_settings`;

            const detailImage = document.createElement('div');
            detailImage.className = 'detail_image';

            const schemeImage = document.createElement('img');
            schemeImage.src = detail.detail_image;
            detailImage.append(schemeImage);

            const schemeElement = document.createElement('img');
            schemeElement.src = detail.detail_scheme;

            schemeElement.hidden = true;
            detailImage.append(schemeElement);

            const detailInfo = document.createElement('div');
            detailInfo.className = 'detail_info';
            detailInfo.innerHTML = detail.detail_more;

            const detailCode = document.createElement('div');
            detailCode.className = 'detail_code';
            // detailCode.textContent = detail.detail_code + ` (${detail.detail_manufacturer})`;

            detailCode.textContent = detail.detail_code;
            if (detail.detail_manufacturer) {
                detailCode.textContent += ` (${detail.detail_manufacturer})`
            }

            const detailOptions = document.createElement('div');
            detailOptions.className = 'detail_options';

            const detailPrice = document.createElement('div');
            detailPrice.className = 'detail_price detail_button';
            detailPrice.textContent = 'Стоимость';
            elementContainer.append(containerDetail);
            containerDetail.append(detailCode);
            containerDetail.append(detailImage);
            containerDetail.append(detailInfo);
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

            checkClick();
            break

        case 'detail_image':
            // console.log('ТЫЦ на картинку');
            break

        default:
            // console.log('что-то ДРУГОЕ');
            // console.log(target.className);
            // console.log(targetElementId);
            break
    }
};

// !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// SEARCH

const inputText = document.getElementById('search')
const searchElementsList = document.getElementById('search_menu')

inputText.oninput = function () {

    // УБИРАЕМ БУРГЕР
    // if (menuElement.classList.contains('active')) {
    //     menuElement.classList.remove('active');
    //     burgerElement.classList.remove('active');
    // }

    // if (searchElementsList.classList.contains('active')) {
    //     document.body.classList.add('lock');
    // } else {
    //     document.body.classList.remove('lock');
    // }

    const substring = inputText.value.toLowerCase();

    if (!substring) {
        searchElementsList.innerHTML = '';
        searchElementsList.classList.remove('active')
        callAccord();
        return
    }

    searchElementsList.classList.add('active')
    findObjectInArray(substring);
    callAccord();
}

function findObjectInArray(item) {

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
    document.addEventListener('DOMContentLoaded', function() {

        /* Записываем в переменные массив элементов-кнопок и подложку.
           Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
        const modalButtons = document.querySelectorAll('.js-open-modal'),
            overlay      = document.querySelector('.js-overlay-modal'),
            closeButtons = document.querySelectorAll('.js-modal-close');

        /* Перебираем массив кнопок */
        modalButtons.forEach(function(item){

            /* Назначаем каждой кнопке обработчик клика */
            item.addEventListener('click', function(e) {

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

        closeButtons.forEach(function(item){

            item.addEventListener('click', function(event) {

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

function addElementToDataArray (item) {
    if (!NEW_DATA.some(e => e.detail_code === item.detail_code)) {
        item.detail_info = item.detail_info.toLowerCase();
        NEW_DATA.push(item);
    }
}
