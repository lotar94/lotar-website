function changeScrollView (id, page) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({block: "end", behavior: "smooth"});
    const listItems = document.querySelectorAll('.header__menu li');
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].textContent === page) {
            listItems[i].style.opacity = '100%';
        }else {
            listItems[i].style.opacity = .5;
        }
    }
}


