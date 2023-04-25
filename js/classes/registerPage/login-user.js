class LoignUser {
    constructor(users) {
        this.users = users
        this.loginBtn = document.querySelector('#login-btn')
        this.exitUser = this.exitUser.bind(this)
        window.exitUser = this.exitUser
        this.render()
    }

    render() {
        const isLogin = this.checkLoginUser()
        if (!isLogin) {
            this.loginBtn.addEventListener('click', event => {
                event.preventDefault()
                this.loignUser()
            })
        }
    }

    loignUser() {
        const targetUser = this.getUserInfo()
        if (targetUser) {
            const date = new Date()
            const targetDate = date.setTime(date.getTime() + 2 * 24 * 60 * 60)
            alert('با موفقیت وارد شدید')
            document.cookie = `email=${targetUser.email}; max-age=${targetDate}`
            window.location.href = 'index.html'
        } else {
            alert('اطلاعاتی با این ایمیل و رمز عبور وجود ندارد')
        }
    }

    checkLoginUser() {
        const emailUser = document.cookie.split('=')[1]
        const formWrapper = document.querySelector('#form-wrapper')
        console.log(emailUser);
        if (emailUser) {
            const targetUser = this.users.find(user => {
                return user.email === emailUser
            })
            formWrapper.innerHTML = ''
            formWrapper.insertAdjacentHTML('beforeend', `
            <div class="alert alert-success d-flex justify-content-between align-items-center  text-right">
                <p class="my-0"> سلام <span class="text-success"> ${targetUser.fullname} </span>، به سایت ما خوش آمدید </p>
                <button class="btn btn-danger btn-sm" id="exit-user" onclick="exitUser(event)">خروج</button>
            </div>
            `)
            return true
        } else {
            return false
        }

    }

    exitUser() {
        document.cookie = 'email = '
        alert('با موفقیت خارج شدید')
        window.location.href = 'index.html'
    }

    getUserInfo() {
        const email = document.querySelector('#email')
        const password = document.querySelector('#pass')
        const isValid = email.value.trim() && password.value.trim()
        if (isValid) {
            const targetUser = this.users.find(user => {
                return user.email === email.value.trim() && user.password === password.value.trim()
            })
            if (targetUser) {
                return targetUser
            } else {
                return false
            }
        }


    }

    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export default LoignUser