import listColorsTemp from '../templates/color-card.hbs'
import colorsData from './colors.json';
// import './style.css';


const paletteContainer = document.querySelector('.js-palette');
const cardMarkp = listColorsTemp(colorsData);
paletteContainer.insertAdjacentHTML('beforeend', cardMarkp);


paletteContainer.addEventListener('click', OnPaletteContainerClick)
getLocalStorageMessage() 
    const saveMessage = localStor
function OnPaletteContainerClick(evn) {
    if (!evn.target.classList.contains('color-swatch')) {
        return
    }
    //вибираємо найближчий div вверх в який включає клас .color-card для елемента на який натиснули 
    const parentColorCard = evn.target.closest('.color-card');
    console.log(parentColorCard)

    // функція яка шукає картку в якої вже є клас .is-active і видаляє його
    removeActiveCardClass() 

    //функція яка додає активний клас на вибрану картку
    addActiveClass(parentColorCard)

    // функція яка витягує з активного елемента hex і додаємо його на body
    setBodyBgColor(evn.target.dataset.hex);
    
}
function setBodyBgColor(color) {
    document.body.style.background = color
    localStorage.setItem('backgraund', color)
}
function removeActiveCardClass() {
    // шукаємо картку в якої вже є клас .is-active
    const currentActiveCard = document.querySelector('.color-card.is-active');
    //провіряємо якщо є така карточка видаляємо з неї такий клас
    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active')
    }   
}

function addActiveClass(сard) {
    //на цей елемент додаємо клас is-active
    сard.classList.add('is-active') 
}

function getLocalStorageMessage() {
    const saveMessage = localStorage.getItem('backgraund')
    if (saveMessage) {
       document.body.style.background =  saveMessage
    }
}