function changeScrollView (id, page) {
    var elmnt = document.getElementById(id);
    var menu = document.getElementById('menu');
    menu.style.right = '-13em';
    var btn_menu = document.getElementById('header__btn-menu');
    btn_menu.checked = false;

    elmnt.scrollIntoView({block: "start", behavior: "smooth"});
}

function mifuncino() {
    var menu = document.getElementById('menu');
    var btn_menu = document.getElementById('header__btn-menu');
    if (btn_menu.checked) {
        menu.style.right = '0em';
    } else {
        menu.style.right = '-13em';
    }
    
    
}

function goToHome() {
    var elmnt = document.getElementById('home');
    elmnt.scrollIntoView({block: "start", behavior: "smooth"});
}



