class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = 'active'

        this.handleCLick = this.handleCLick.bind(this)
    }

    animatedLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleCLick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animatedLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', () => this.handleCLick())
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init()