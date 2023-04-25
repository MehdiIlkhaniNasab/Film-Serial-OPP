import Users from "./users.js"


class RegisterUser {
    constructor() {
        this.users = this.getLocalStorage('users') || []
        this.submitCommentBtn = document.querySelector('#submit-btn')
        console.log(this.submitCommentBtn);
        this.render()
    }

    render() {
        this.submitCommentBtn.addEventListener('click', event => {
            event.preventDefault()
            this.submitUser()
        })
    }

    submitUser(){
        const userInfo = this.getNewUserInfo()
        const registerForm = document.querySelector('#register-form')
        if(userInfo){
            this.users.push(userInfo)
            this.setLocalStorage('users', this.users)
            registerForm.reset()
            alert('ثبت نام با موفقیت انجام شد')
        }
    }

    getNewUserInfo() {
        const username = document.querySelector('#fullname')
        const email = document.querySelector('#email')
        const password = document.querySelector('#pass')
        const isValid = username.value.trim() && email.value.trim() && password.value.trim()

        if(isValid){
            const userId = this.users.length ? this.users[this.users.length - 1].id + 1 : 0
            const user = new Users(userId, username.value.trim(), email.value.trim(), password.value.trim())
            return user
        }else{
            alert('لطفا تمام اطلاعات رو پر کنید')
            return false
        }
    }

    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export default RegisterUser