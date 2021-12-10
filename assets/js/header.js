

const headerEvent = {


    vehicleBtnEvent: (vehicleBtn, viewCarModal) => {
        vehicleBtn.onclick = () => {
            if (vehicleBtn.classList.contains('onclick')) {
                viewCarModal.classList.remove('open-modal');
                vehicleBtn.classList.remove('onclick');
            } else {
                viewCarModal.classList.add('open-modal');
                vehicleBtn.classList.add('onclick');
                
                
            }
        }
        
    },

    shoppingToolEvent: (shoppingToolBtn, subnavModal) => {

        shoppingToolBtn.onclick = () => {
            if (subnavModal.style.display == 'block') {
                subnavModal.style.display = 'none';
            }
            else subnavModal.style.display = 'block';
            shoppingToolBtn.classList.toggle('onclick');

        }
    },

    menuEvent: (menuBtn,menuBtnList) => {
        menuBtn.onclick = () => {
            $('.line-text')[0].classList.toggle('animate__fadeOutDown');
            $('.line')[0].classList.toggle('click-active');
            $('.line')[1].classList.toggle('click-active');
            $('.mini-menu-modal-container')[0].classList.toggle('opened');
        }
        menuBtnList.forEach(btn => {
            btn.onclick = () => {
                let direction = btn.getAttribute("data-direction");
                let miniSubmenu;
                let returnBtn;
                if(direction){
                    miniSubmenu = $(`#${direction}`)[0]
                    returnBtn = $(`#${direction} h3`)[0]
                    miniSubmenu.classList.add('opened');
                    $('.mini-menu-modal')[0].classList.add('closed');
                    returnBtn.onclick = () => {
                        miniSubmenu.classList.remove('opened');
                        $('.mini-menu-modal')[0].classList.remove('closed');
                    }
                }
            }
        });
    },




    start: (menuBtn,menuBtnList,vehicleBtn, viewCarModal, shoppingToolBtn, subnavModal) => {
        headerEvent.vehicleBtnEvent(vehicleBtn, viewCarModal);
        headerEvent.shoppingToolEvent(shoppingToolBtn, subnavModal);
        headerEvent.menuEvent(menuBtn,menuBtnList)
    }
}

export default headerEvent;