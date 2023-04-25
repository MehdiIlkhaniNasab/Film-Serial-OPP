import LoignUser from "./classes/registerPage/login-user.js"

window.addEventListener('load', () => {
    const users = JSON.parse(localStorage.getItem('users'))

    const loignUser = new LoignUser(users)
})