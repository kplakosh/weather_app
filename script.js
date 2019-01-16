let header = document.getElementsByClassName("header");
let current_temp = document.getElementsByClassName("current-temp");

// let last_known_scroll_position = 0;
// let ticking = false;

// function hideContent(scroll_pos) {
//     // Hide temperature under header
//     header.style.height = "150px";
//     current_temp.style.display = "none";

//     // Hide current day description

// }

// window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = window.scrollY;

//     if(!ticking) {
//         window.requestAnimationFrame(function() {
//             hideContent(last_known_scroll_position);
//             ticking = false;
//         });

//         ticking = true;
//     }
// });


window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.className = "header-short";
    } else {
        header.className = "";
    }
}

