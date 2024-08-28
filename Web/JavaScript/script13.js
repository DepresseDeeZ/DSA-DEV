const menuClicked = (curr) =>{
    const menu = document.getElementsByClassName('menu-item');
        for (let i = 0; i < menu.length ; i++) {
            menu[i].classList.remove('active');        
        }
    curr.classList.add('active');
    }