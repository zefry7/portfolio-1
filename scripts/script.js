

window.addEventListener(`resize`, () => {
    console.log(window.screen.width);
});


let headerContent = document.getElementsByClassName("header-content")[0];

function sizePage() {
    if (window.screen.width <= 768 && document.getElementsByClassName("burger-menu")[0] == null) {
        let burgerMenu = document.createElement("div");
        burgerMenu.className = "burger-menu";
        burgerMenu.innerHTML = `
        <div class="burger-menu__line"></div>
        <div class="burger-menu__line"></div>
        <div class="burger-menu__line"></div>
        <div class="burger-menu__block"></div>`;
        headerContent.append(burgerMenu);

        let el = document.getElementsByClassName("burger-menu__block")[0];
        for (let item of headerContent.children) {
            if (item.className != "header-content__logo") {
                item.className += " header-content__menu_burger_active";
                el.append(item);
            }
        }

        burgerMenu.addEventListener("click", () => { el.style.display = 'flex'; });


    } else if (window.screen.width > 768 && document.getElementsByClassName("burger-menu")[0] != null) {
        let el = document.getElementsByClassName("burger-menu__block")[0];

        let menuEl = el.children[0];
        menuEl.className = menuEl.classList[0];
        headerContent.children[0].after(menuEl);

        let buttonMenu = el.children[0];
        buttonMenu.className = buttonMenu.classList[0];
        headerContent.children[2].after(buttonMenu);

        headerContent.removeChild(el.parentNode);

    }
}


