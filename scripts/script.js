
let burgerMenu = document.getElementsByClassName("burger-menu")[0];
let menuBody = document.getElementsByClassName("header-content__menu-body")[0];

burgerMenu.addEventListener("click", () => {
    document.body.classList.toggle("body__lock");
    burgerMenu.classList.toggle("burger-menu_active");
    menuBody.classList.toggle("header-content__menu-body_visited");
})

window.addEventListener("resize", () => {
    if (window.screen.width >= 768) {
        menuBody.classList.remove("header-content__menu-body_visited");
        burgerMenu.classList.remove("burger-menu_active");
        document.body.classList.remove("body__lock");
    }
})

const menuLinks = document.querySelectorAll(".header-content__section-button[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", function (e) {
            const elLink = e.target;
            burgerMenu.classList.toggle("burger-menu_active");
            menuBody.classList.toggle("header-content__menu-body_visited");
            document.body.classList.toggle("body__lock");
            if (elLink.dataset.goto != "title-block" && document.getElementsByClassName(elLink.dataset.goto)) {
                const gotoBlock = document.getElementsByClassName(elLink.dataset.goto)[0];
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector(".header-content").offsetHeight - 30;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        });
    });
}