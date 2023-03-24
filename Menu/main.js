let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {

    item.addEventListener('click', event => {

        if(item.querySelector('.submenu')){
           
            item.querySelector('.submenu').classList.toggle('active');
        }
    });
});