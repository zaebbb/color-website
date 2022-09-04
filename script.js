const menu = document.querySelector("#mobile-menu");
const menuLink = document.querySelector(".navbar-menu");
const navLink = document.querySelector("#navbar-logo");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLink.classList.toggle("active");
});

const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const servicesMenu = document.querySelector("#services-page");

    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove("highlight");
    }
}

window.addEventListener("scroll", () => {
    highlightMenu();
});
window.addEventListener("click", () => {
    highlightMenu();
});

const hideMobile = document.querySelector(".is-active");
const hideMenuFunc = () => {
    if(window.innerWidth <= 768){
        menu.classList.toggle("is-active");
        menuLink.classList.remove("active")
    }
}
menuLink.addEventListener("click", hideMenuFunc);
navLink.addEventListener("click", hideMenuFunc);