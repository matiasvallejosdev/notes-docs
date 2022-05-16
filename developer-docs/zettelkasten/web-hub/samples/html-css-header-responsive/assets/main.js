function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
}

document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);

function classBrandHide(){
    const navs = document.querySelectorAll('.navbar-link-brand')
    navs.forEach(nav => nav.classList.toggle('navbar-link-brand-hide'));
}

document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classBrandHide);

let changeIcon = function(icon){
    icon.classList.toggle('fa-times')
}