// import * as helpers from './helpers-module.js';

//TODO ordenar documento js

window.addEventListener("load", () => {
    let links = document.querySelectorAll(".navbar-item > a");
    let profileDev = document.querySelectorAll("li.profile-dev");
    let profileTeacher = document.querySelectorAll("li.profile-teacher");


    links.forEach(a => a.addEventListener("click", link => {
        links.forEach(a => {
            a.classList.remove("active");
        });
        link.target.classList.add("active");

        // document.querySelector("section#sobre-mi").scrollIntoView({
        //     behavior:'smooth'
        // })

    }));

    function animateProfile() {
        for (let i = 0; i < profileDev.length; i++) {
            fadeOut(profileDev[i]);
            fadeIn(profileTeacher[i]);

            setTimeout(() => {
                setInterval(() => {
                    if (profileDev[i].style.opacity == "1") {
                        fadeOut(profileDev[i]);
                        fadeIn(profileTeacher[i]);
                    } else {
                        fadeIn(profileDev[i]);
                        fadeOut(profileTeacher[i]);
                    }
                }, 2500);
            }, 500)
        }
    }

    animateProfile();

    function fadeOut(element) {
        element.style.transitionProperty = "opacity";
        element.style.transitionDuration = ".5s";
        element.style.transitionDelay = ".5s";
        element.style.opacity = "0";
    }

    function fadeIn(element) {
        element.style.transitionDuration = ".5s";
        element.style.opacity = "1";
        element.style.transitionDelay = "1s";
        element.style.transitionProperty = "opacity";
    }

    function scrollListener() {
        let nabvarContainer = document.querySelector(".navbar-container");
        let slideButton = document.querySelector(".slide-button");
        let body = document.querySelector("body");

        if (window.scrollY > 50) {
            nabvarContainer.classList.add("navbar-fixed")
            slideButton.classList.add("hide")
            body.style.paddingTop = "4rem";
        } else {
            nabvarContainer.classList.remove("navbar-fixed");
            slideButton.classList.remove("hide")
            body.style.paddingTop = "0";
        }
    }

    scrollListener();
    window.document.addEventListener("scroll", scrollListener, {passive: true})
});
