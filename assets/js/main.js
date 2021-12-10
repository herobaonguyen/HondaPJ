import headerEvent from './header.js';


const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);


//--------------------HEADER MODAL-------------
const vehicleBtn = $('.modal-viewcar');
const viewCarModal = $('.view-car-modal');
const shoppingToolBtn = $('.modal-subnav');
const subnavModal = $('.submenu-modal');
const menuBtn = $('.menu-button');
const menuBtnList = $$('.mini-menu-modal .mini-menu-button');



document.onclick = function (e) {
    if (!(e.target.closest('.view-car-modal')) && !(e.target.closest('.modal-viewcar'))) {
        if (vehicleBtn.classList.contains('onclick')) {
            viewCarModal.classList.remove('open-modal');
            vehicleBtn.classList.remove('onclick');
        }
    } 
    if (!(e.target.closest('.submenu-modal-container')) && !(e.target.closest('.modal-subnav'))){
        if (shoppingToolBtn.classList.contains('onclick')) {
            subnavModal.style.display = 'none';
            shoppingToolBtn.classList.remove('onclick');
        }
    }
}
if(viewCarModal.classList.contains('open-modal')){
    document.style.overflowY ="hidden"
}


headerEvent.start(menuBtn,menuBtnList,vehicleBtn, viewCarModal, shoppingToolBtn, subnavModal);

