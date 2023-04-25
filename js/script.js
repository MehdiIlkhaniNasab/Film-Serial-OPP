import categoies from "./DB/categorys.js";
import { filmData } from "./DB/film-data.js";
import Categories from "./classes/show-category.js";
import RandomFilms from "./classes/show-random-film.js";

class TopMenu {
    constructor(menuList) {
        this.menuList = menuList
        this.render()
    }
    render() {
        this.menuList.addEventListener('click', event => {
            if (event.target.className.includes('dropdown-link')) {
                this.showDropdown()
            }
        })
    }
    showDropdown() {
        const dropdownNav = document.querySelector('.dropdown-nav')
        dropdownNav.classList.toggle('active')
        this.showContentDropdown()

    }

    showContentDropdown() {
        const dropdownGroup = document.querySelector('.dropdown-group')
        dropdownGroup.innerHTML = ''
        categoies.forEach(item => {
            dropdownGroup.insertAdjacentHTML('beforeend', `  
                <li>
                    <i class="fa fa-angle-left"></i>
                    <a href="${item.href}" class="">${item.title}</a>
                </li>
            `)
        })
    }

}

window.addEventListener('load', () => {
    const categoryWrapper = document.querySelector('.category-list')
    const menuList = document.querySelector('.navbar-main .container')
    const loginNavLink = document.querySelector('#login-link')
    const registerNavLink = document.querySelector('#register-link')
    const userPanelLink = document.querySelector('#user-panel-link')
    const categorysSection = new Categories(categoryWrapper, categoies)
    const topMenu = new TopMenu(menuList)
    const randomFilms = new RandomFilms(filmData)
    const emailUser = document.cookie.split('=')[1]
    if (emailUser) {
        registerNavLink.classList.add('d-none')
        loginNavLink.classList.add('d-none')
        userPanelLink.classList.remove('d-none')
    }else{
        registerNavLink.classList.remove('d-none')
        loginNavLink.classList.remove('d-none')
        userPanelLink.classList.add('d-none')

    }

})