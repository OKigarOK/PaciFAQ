import {HEADERS} from "./data/maintenance.js";

// MENU
createContentMenu(HEADERS);

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
    }
}

function createSubtitles(headerSubtitles, panelElement) {

    for (let subTitle of headerSubtitles) {
        // console.log(subTitle);
        const headerSubtitle = document.createElement('button');
        headerSubtitle.className = 'accordion title';
        headerSubtitle.innerHTML = subTitle.subtitle;
        const newPanelElement = document.createElement('div');
        newPanelElement.className = 'panel';
        const containerItems = document.createElement('div');
        containerItems.className = 'container_items';

        panelElement.append(headerSubtitle);
        headerSubtitle.after(newPanelElement);
        newPanelElement.append(containerItems);

        if (subTitle.details) {
            createDetails(subTitle.details, containerItems)
        }
    }
}

function createDetails(subTitleDetails, containerItems) {

    for (let detail of subTitleDetails) {

        const newId = Date.now();

        const containerDetail = document.createElement('div');
        containerDetail.className = 'container_detail';
        containerDetail.setAttribute('id' , `${newId}` );
        detail.detail_id = newId;

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
        detailOptions.className = 'detail_options';

        const detailPrice = document.createElement('div');
        detailPrice.className = 'detail_price';
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
            detailMore.className = 'detail_more';
            detailMore.textContent = 'Подробнее';
            detailOptions.append(detailMore);
        }

        if (detail.detail_scheme) {
            const detailScheme = document.createElement('div');
            detailScheme.className = 'detail_scheme';
            detailScheme.textContent = 'На схеме';
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
            panel.style.maxHeight = panel.scrollHeight + "px";
            // panel.style.maxHeight = '100%';

        }
    });
}




// ОТДЕЛЬНЫЙ МАССИВ ДЕТАЛЕЙ ДЛЯ ПОИСКА

const newData = []

for (let subtitle of HEADERS) {
    if (subtitle['subtitles']) {
        for (let detail of subtitle['subtitles']) {
            if (detail['details']) {
                for (let item of detail['details']) {
                    newData.push(item)
                }
            }
        }
    }
}

console.log(newData);

// ТЫЦ

// const click = document.getElementsByClassName('container_detail')

window.onclick = function(event) {
    let target = event.target; // где был клик?

    // console.log(target.className);
    console.log(target);
    console.log(event);


    const targetElementId = target.parentElement.parentElement.id;

    const clickElement = newData.find(elem => elem.detail_id === +targetElementId)
    // ID - число при формировании



    switch (target.className) {

        case 'detail_scheme':

            const imageElement = target.parentElement.previousElementSibling.previousElementSibling;

            if (target.textContent === 'На схеме') {
                target.textContent = 'Деталь';
                // console.log(target.parentElement.previousElementSibling.previousElementSibling);
                imageElement.innerHTML = (`<img src="${clickElement.detail_scheme}">`)
            } else {
                target.textContent = 'На схеме';
                imageElement.innerHTML = (`<img src="${clickElement.detail_image}">`)
            }
            break
            // console.log('ура, СХЕМА');
            // console.log(targetElementId);
            // target.textContent = 'Деталь';
            // console.log(clickElement);



            // break

        case 'detail_price':
            console.log('смотрим ЦЕНУ');
            console.log(targetElementId);
            break

        case 'detail_more':
            console.log('смотрим ПОДРОБНЕЕ');
            console.log(targetElementId);
            break

        default:
            console.log('что-то ДРУГОЕ');
            console.log(targetElementId);
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
            console.log(modalElem.classList.add('active'));;
            console.log(overlay.classList.add('active'));;
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


// SETTINGS JS

const currentTheme = localStorage.getItem('theme') || 'dark_theme';
const currentFontSize = localStorage.getItem('fontSize') || 'fontSizeM';
const setSettings = document.getElementById('setSettings');

Render()

function Render() {
    setSettings.classList.add(currentTheme);
    document.getElementById(currentTheme).checked = true;

    document.body.classList.add(currentFontSize);
    setSettings.classList.add(currentFontSize);
    document.getElementById(currentFontSize).checked = true;
}

const allInputs = document.querySelectorAll('input');

for (let elem of allInputs) {
    elem.addEventListener('click', () => {
        // СМЕНА ТЕМЫ //
        if (elem.name === 'theme') {
            clearThemeClass();
            setSettings.classList.add(`${elem.id}`);
            localStorage.setItem('theme', `${elem.id}`);
        }

        // СМЕНА ШРИФТА //
        if (elem.name === 'fontSize') {
            clearFontClasses();
            setSettings.classList.add(`${elem.id}`);
            document.body.classList.add(`${elem.id}`);
            console.log(elem.id);
            localStorage.setItem('fontSize', `${elem.id}`);
            // createContentMenu(HEADERS);
        }
    })
}

function clearThemeClass() {
    setSettings.classList.remove('dark_theme');
    setSettings.classList.remove('light_theme');
}

function clearFontClasses() {
    setSettings.classList.remove('fontSizeS');
    setSettings.classList.remove('fontSizeM');
    setSettings.classList.remove('fontSizeL');
    document.body.classList.remove('fontSizeS');
    document.body.classList.remove('fontSizeM');
    document.body.classList.remove('fontSizeL');
}


