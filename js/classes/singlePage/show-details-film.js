import { Comment } from "../../DB/film-data.js"

class ShowDetailsFilm {
    constructor(id, films, categories) {
        this.films = films
        this.filmId = id
        this.categories = categories
        this.render()
    }

    render() {

        this.ShowDetailsFilm()
        this.showBreadCrumb()
        this.showKeywords()
        this.showComments()
        const commentBtn = document.querySelector('#comment-btn')
        commentBtn.addEventListener('click', event => {
            this.sendComment()
        })
    }

    ShowDetailsFilm() {
        const targetFilm = this.getTargetFilm()
        const titleFilm = document.querySelector('#title-film')
        const dateFilm = document.querySelector('#date-film')
        const imgFilm = document.querySelector('#img-film')
        const descFilm = document.querySelector('#desc-film')
        if (targetFilm) {
            titleFilm.innerHTML = targetFilm.title
            dateFilm.innerHTML = targetFilm.date
            descFilm.innerHTML = targetFilm.description
            imgFilm.src = targetFilm.imgSrc
        } else {
            window.location.href = 'index.html'

        }
    }

    getTargetFilm() {
        const targetFilm = this.films.find(film => {
            return film.id === this.filmId
        })

        return targetFilm
    }

    getTargetCategory(categoryHref) {
        const categoryDetails = this.categories.find(category => {
            return category.hrefEn === categoryHref
        })

        return categoryDetails
    }

    getKeywords() {
        const targetFilm = this.getTargetFilm()
        const keyWords = targetFilm.keyWords
        return keyWords
    }
    getComments() {
        const targetFilm = this.getTargetFilm()
        const comments = targetFilm.comments
        return comments
    }

    sendComment() {
        const targetFilm = this.getTargetFilm()

        const comments = this.getComments()
        const commentId = comments[comments.length - 1].id
        const commentInfo = this.getCommentInfo(commentId, targetFilm)
        if (commentInfo) {
            comments.push(commentInfo)
            this.showComments()
            
        } else {
            alert('اطلاعات را کامل وارد کنید')
        }
    }

    getCommentInfo(id, targetFilm) {
        const commentForm = document.querySelector('#comment-form')
        const fullname = document.querySelector('#fullname')
        const email = document.querySelector('#email')
        const code = document.querySelector('#code')
        const description = document.querySelector('#desc')
        const dete = new Date().getFullYear()
        const isValid = fullname.value.trim() && email.value.trim() && description.value.trim()
        console.log(targetFilm);
        if (isValid && code.value === '12345') {
            const commentInfo = new Comment(id, fullname.value.trim(), email.value.trim(), dete, description.value.trim(), targetFilm.categoryHref, targetFilm.categoryTitle, targetFilm.id)
            commentForm.reset()
            description.value = ''
            return commentInfo
        } else {
            return false
        }
    }

    showBreadCrumb() {
        const targetFilm = this.getTargetFilm()
        const categoryDetails = this.getTargetCategory(targetFilm.categoryHref)
        const breadcrumbCategory = document.querySelector('#breadcrumb-category')
        const breadcrumbActive = document.querySelector('#breadcrumb-active')
        breadcrumbCategory.innerHTML = categoryDetails.title
        breadcrumbCategory.href = categoryDetails.href
        breadcrumbActive.innerHTML = targetFilm.title
    }

    showKeywords() {
        const keyWords = this.getKeywords()
        const keywordsWrapper = document.querySelector('#keyword-wrapper')
        keywordsWrapper.innerHTML = ''
        keyWords.forEach(key => {
            keywordsWrapper.insertAdjacentHTML('beforeend',
                `
        <button class="btn btn-sm btn-dark">${key}</button>
        `
            )
        });
    }

    showComments() {
        const comments = this.getComments()
        const commentsWrapper = document.querySelector('#comments-wrapper')
        const countComment = document.querySelector('#count-comment')
        countComment.innerHTML = `${comments.length} دیدگاه`
        commentsWrapper.innerHTML = ''
        comments.forEach(comment => {
            commentsWrapper.insertAdjacentHTML('beforeend', `
                <div class="border rounded-sm d-flex flex-column align-items-start justify-content-start m-2 p-3 ">
                <div class="d-flex align-items-start justify-content-start">
                    <div class="rounded-sm overflow-hidden " style=" width: 70px; height: 60px;">
                        <img src="img/1.png" alt="" width="100%" height="100%">
                    </div>
                    <div class="mr-2 text-right text-secondary">
                        <p class="m-0">${comment.fullname}</p>
                        <p class="mt-2">${comment.date}</p>
                    </div>
                </div>
                <div class="my-1">
                    <p class="text-justify">
                    ${comment.description}
                    </p>
                </div>
            </div>
            ` )
        })
    }
}

export default ShowDetailsFilm