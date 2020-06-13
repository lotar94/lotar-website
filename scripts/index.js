function changeScrollView (id, page) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({block: "start", behavior: "smooth"});
    // if(id === "home") {
    //     setTimeout(() => {
    //         document.getElementById('header').style.visibility = "unset";
    //     }, 400);
    // }
}

// window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = window.scrollY;
//     if (last_known_scroll_position < 600) {
//         document.getElementById('header').style.visibility = "hidden";
//     } else {
//         document.getElementById('header').style.visibility = "unset";
//     }
//     console.log('cambio=> ', last_known_scroll_position);
    
// });


