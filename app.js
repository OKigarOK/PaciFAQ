import {HEADERS} from "./data/maintenance.js";

const NEW_DATA = [];

// SETTINGS

// Отрендерить настройки в НАЧАЛЕ

const currentTheme = localStorage.getItem('theme');
const currentFontSize = localStorage.getItem('fontSize');
const currentView = localStorage.getItem('view');

const setSettings = document.getElementById('setSettings');

const setTheme = document.getElementById('theme')

const SETTINGS = {
    THEME: currentTheme || 'original_theme',
    FONT_SIZE: currentFontSize || 'fontSizeS',
    VIEW: currentView || 'details_table'
}

saveSettingsToLocal(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)

render(SETTINGS.THEME, SETTINGS.FONT_SIZE, SETTINGS.VIEW)

function saveSettingsToLocal(theme, font, view) {
    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', font);
    localStorage.setItem('view', view);
    setTheme.classList.add(theme);
}

// RENDER должен отрендерить по настройкам: тема, шрифт, вид

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

// Create MENU создаёт дерево элементов
// Засунуть темы, шрифты, вид в СТИЛИ

createContentMenu(HEADERS);

renderSettings();

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
        containerItems.className = 'container_items';

        panelElement.append(headerSubtitle);
        headerSubtitle.after(newPanelElement);

        if (subTitle.details) {
            newPanelElement.append(containerItems);
            createDetails(subTitle.details, containerItems);
        }

        if (!subTitle.details && !subTitle.sub_subtitles) {
            headerSubtitle.disabled = true;
        }

        // Здесь ещё один АККОРДИОН подзаголовков
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

        const containerItems = document.createElement('div');
        containerItems.className = 'container_items';

        panelElement.append(headerSubSubtitle);
        headerSubSubtitle.after(newPanelElement);
        newPanelElement.append(containerItems);

        // console.log(subTitle);

        if (subTitle.details) {
            // console.log('Выводим детали');
            // console.log(subTitle.details);
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
            containerDetail.className = 'container_detail';
        } else {
            containerDetail.className = 'container_detail full_width';
        }

        containerDetail.setAttribute('id' , `${detail.detail_code}` );
        detail.detail_id = detail.detail_code;

        const detailImage = document.createElement('div');
        detailImage.className = 'detail_image';
        detailImage.innerHTML = `<img src="${detail.detail_image}" alt="${detail.detail_manufacturer}">`;

        const detailNavContainer = document.createElement('div');
        detailNavContainer.className = 'QWERTY';

        const detailInfo = document.createElement('div');
        detailInfo.className = 'detail_info';
        detailInfo.innerHTML = detail.detail_info;

        const detailCode = document.createElement('div');
        detailCode.className = 'detail_code';
        detailCode.textContent = detail.detail_code + ` (${detail.detail_manufacturer})`;

        const detailOptions = document.createElement('div');
        if ((SETTINGS.VIEW === 'details_table') && (SETTINGS.FONT_SIZE === 'fontSizeM')) {
            detailOptions.className = 'detail_options detail_options_wrap';
        } else {
            detailOptions.className = 'detail_options';
        }

        const detailPrice = document.createElement('div');
        // detailPrice.className = 'detail_price detail_button light_theme_buttons';
        detailPrice.className = 'detail_price detail_button';

        detailPrice.textContent = 'Стоимость';

        containerItems.append(containerDetail);
        containerDetail.append(detailCode);

        containerDetail.append(detailImage);
        containerDetail.append(detailInfo);

        // containerDetail.append(detailInfo);
        containerDetail.append(detailOptions);
        detailOptions.append(detailPrice);

        if (detail.detail_more) {
            const detailMore = document.createElement('div');
            // detailMore.className = 'detail_more detail_button light_theme_buttons';
            detailMore.className = 'detail_more detail_button js-open-modal';
            detailMore.setAttribute('data-modal', '11');

            detailMore.textContent = 'Подробнее';
            detailOptions.append(detailMore);
        }

        if (detail.detail_scheme) {
            const detailScheme = document.createElement('div');
            // detailScheme.className = 'detail_scheme detail_button light_theme_buttons';
            detailScheme.className = 'detail_scheme detail_button';

            detailScheme.textContent = 'Схема';
            detailOptions.append(detailScheme);
        }
    }
}

// АККОРДИОН

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
            panel.style.maxHeight = '1500px';
        }
    });
}


// ОТДЕЛЬНЫЙ МАССИВ ДЕТАЛЕЙ ДЛЯ ПОИСКА

// ОБРАБОТКА КЛИКОВ

// const click = document.getElementsByClassName('container_detail')



window.onclick = function(event) {
    let target = event.target; // где был клик?

    const targetElementId = target.parentElement.parentElement.id;

    if (!targetElementId) return

    // console.log(targetElementId);

    const clickElement = NEW_DATA.find(elem => elem.detail_id === targetElementId)

    console.log(clickElement);

    // console.log(target.parentElement);

    // ID - число при формировании

    switch (target.className) {

        case 'detail_scheme detail_button':

            const imageElement = target.parentElement.previousElementSibling.previousElementSibling;

            if (target.textContent === 'Схема') {
                target.textContent = 'Деталь';
                // console.log(target.parentElement.previousElementSibling.previousElementSibling);
                imageElement.innerHTML = (`<img src="${clickElement.detail_scheme}" alt="image"> `);
            } else {
                target.textContent = 'Схема';
                imageElement.innerHTML = (`<img src="${clickElement.detail_image}" alt="image">`)
            }
            break

        case 'detail_price detail_button':
            console.log('смотрим ЦЕНУ');
            // console.log(targetElementId);
            break

        case 'detail_more detail_button js-open-modal':
            console.log('смотрим ПОДРОБНЕЕ');

            console.log(targetElementId); // ID элемента


            const detail = NEW_DATA.find(elem => elem.detail_id === targetElementId)
            console.log(detail);  // Объект ЭЛЕМЕНТА

            const elementContainer = document.querySelector('.modal.active')
            console.log(elementContainer); // Вход в МОДАЛКУ

            // ЗДЕСЬ ОБНУЛЕНИЕ
            elementContainer.innerHTML = '';

            // elementContainer.lastElementChild.innerHTML = detail.detail_more

            // const elementToAppend = elementContainer.lastElementChild

            // if (SETTINGS.VIEW === 'details_table') {
            //     elementToAppend.classList.add('.full_width')
            // }

            // console.log(elementToAppend); // Контейнер Элемента

            // ЗДЕСЬ МОЖНО СТРОИТЬ МОДАЛКУ ПОДРОБНЕЕ

            const containerDetail = document.createElement('div');
            // if (SETTINGS.VIEW === 'details_table') {
            //     containerDetail.className = 'container_detail';
            // } else {
                containerDetail.className = `container_detail full_width more_modal_settings`;
            // }

            // console.log(containerDetail);
            // containerDetail.innerHTML = '';

            // containerDetail.setAttribute('id' , `${detail.detail_code}` );
            // detail.detail_id = detail.detail_code;

            const detailImage = document.createElement('div');
            detailImage.className = 'detail_image';
            detailImage.innerHTML = `<img src="${detail.detail_image}" alt="${detail.detail_manufacturer}">`;

            // const detailNavContainer = document.createElement('div');
            // detailNavContainer.className = 'QWERTY';

            const detailInfo = document.createElement('div');
            detailInfo.className = 'detail_info';
            detailInfo.innerHTML = detail.detail_info;

            const detailCode = document.createElement('div');
            detailCode.className = 'detail_code';
            detailCode.textContent = detail.detail_code + ` (${detail.detail_manufacturer})`;

            const detailOptions = document.createElement('div');
            if ((SETTINGS.VIEW === 'details_table') && (SETTINGS.FONT_SIZE === 'fontSizeM')) {
                detailOptions.className = 'detail_options detail_options_wrap';
            } else {
                detailOptions.className = 'detail_options';
            }

            const detailPrice = document.createElement('div');
            // detailPrice.className = 'detail_price detail_button light_theme_buttons';
            detailPrice.className = 'detail_price detail_button';

            detailPrice.textContent = 'Стоимость';

            // containerItems.append(containerDetail);

            elementContainer.append(containerDetail);

            containerDetail.append(detailCode);
            containerDetail.append(detailImage);
            containerDetail.append(detailInfo);

            // containerDetail.append(detailInfo);
            containerDetail.append(detailOptions);
            detailOptions.append(detailPrice);

            if (detail.detail_more) {
                const detailMore = document.createElement('div');
                // detailMore.className = 'detail_more detail_button light_theme_buttons';
                detailMore.className = 'detail_more detail_button js-open-modal';
                detailMore.setAttribute('data-modal', '11');

                // detailMore.textContent = 'Подробнее';
                // detailOptions.append(detailMore);
            }

            if (detail.detail_scheme) {
                const detailScheme = document.createElement('div');
                // detailScheme.className = 'detail_scheme detail_button light_theme_buttons';
                detailScheme.className = 'detail_scheme detail_button';
                detailScheme.textContent = 'Схема';
                detailOptions.append(detailScheme);
            }

            break

        case 'detail_image':
            console.log('ТЫЦ на картинку');
            break

        default:
            console.log('что-то ДРУГОЕ');
            // console.log(target.className);
            // console.log(targetElementId);
            break
    }
};


// !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// SEARCH

// const inputText = document.getElementById('inner_text')
// const result = document.getElementById('outer_text')
//
// inputText.oninput = function() {
//     if (inputText.value) {
//         result.innerHTML = inputText.value;
//         console.log(result.classList.add('show_search'));
//     } else {
//         result.classList.remove('show_search');
//     }
//     // result.innerHTML = inputText.value;
// };
//
// inputText.onfocus = function (e) {
//     // document.body.style.background = 'red'
// }

// МНОГО МОДАЛОК

document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    // console.log(modalButtons);
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
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach

    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    }); // end foreach

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key === 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        }
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
}); // end ready



// СМЕНА НАСТРОЕК


// console.log(SETTINGS);

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

                // ВАРИАНТЫ РАСКЛАДА
                if (elem.id === 'details_table') {
                    removeFullView();
                    addDetailsWrapView()
                } else {
                    addFullView();
                    removeDetailsWrapView()
                }
                localStorage.setItem('view', `${elem.id}`);
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
    // console.log(allElements);
    for (let item of allElements) {
        item.classList.add('detail_options_wrap');
    }
}

function removeDetailsWrapView() {
    const allElements = document.querySelectorAll('.detail_options')
    // console.log(allElements);
    for (let item of allElements) {
        item.classList.remove('detail_options_wrap')
    }
}

// console.log(NEW_DATA);

function addElementToDataArray (item) {
    // console.log(item.detail_code);
    if (!NEW_DATA.some(e => e.detail_code === item.detail_code)) {
        NEW_DATA.push(item)
    }
}