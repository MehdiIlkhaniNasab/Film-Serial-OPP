class Breadcrumb {
    constructor(targetCategory, categories) {
        this.targetCategory = targetCategory

        this.breadcrumbActive = document.querySelector('.breadcrumb-item.active')
        this.categories = categories
        this.render()
    }
    render() {
        this.showBreadcrumb()
    }
    showBreadcrumb() {
        let target = this.categories.find(item => {
            return item.hrefEn === this.targetCategory
        })
        this.breadcrumbActive.innerHTML = target ? target.title : 'همه'

    }
}


class ArchiveFilms {
    constructor(films, targetCategory, categories) {
        this.titleArchive = document.querySelector('#title-archive')
        this.categories = categories
        this.targetCategory = targetCategory
        this.films = films

        this.wrapper = document.querySelector('.archive-films')
        this.goToSinglePage = this.goToSinglePage.bind(this)
        window.goToSinglePage = this.goToSinglePage
        this.render()
    }

    render() {
        if(this.targetCategory){
            this.films = this.films.filter(film => {
                return film.categoryHref === this.targetCategory
            })
            this.categories.find(item => {
                this.titleArchive.innerHTML = `آرشیو فیلم سریال های ${item.title}`
                return item.hrefEn === this.targetCategory
            })
        }else{
            this.titleArchive.innerHTML = `آرشیو همه فیلم و سریال ها`
        }


        this.showArchiveFilms()
    }

    showArchiveFilms() {
        this.wrapper.innerHTML = ''
        if (this.films.length) {
            this.films.forEach(film => {
                this.wrapper.insertAdjacentHTML('beforeend', `
            <div class="bottom-archive px-2 py-2 border-bottom">
                <div class="film-item d-flex align-items-center justify-content-between col-12 p-0">
                    <div class=" rounded-sm col-4 p-0 overflow-hidden mr-2 d-none d-md-block">
                        <img src="${film.imgSrc}" alt="" width="230" height="210" class="">
                    </div>
                    <div class="film-item-details d-flex flex-column align-items-start justify-content-center px-1 px-md-4 col-12 col-md-8">
                        <div class="film-item-title d-flex align-items-center justify-content-between w-100">
                            <h6 class="mt-2">${film.title}</h6>
                            <div class="film-item-date d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center justify-content-between">
                                    <i class="fa fa-calendar"></i>
                                    <p class="m-0">تاریخ انتشار :</p>
                                </div>
                                <p class="m-0">${film.date}</p>
                            </div>
                        </div>
                        <div class="">
                            <p class="my-2 text-right">
                            ${film.description}
                            </p>
                        </div>
                        <div class="align-self-end ">
                            <button class="btn btn-warning btn-sm text-dark " id="${film.id}" onclick="goToSinglePage(event)">مشاهده و خرید</button>
                        </div>
                    </div>
                </div>
            </div>
            `)
            });
        } else {
            this.wrapper.insertAdjacentHTML('beforeend', `
            <div class="alert alert-danger m-2 text-right"> فیلم و سریالی برای این دسته بندی موجود نیست </div>
            `)
        }
    }

    goToSinglePage(event) {
        window.location.href = `single.html?id=${event.target.id}`
    }
}

export { ArchiveFilms, Breadcrumb }