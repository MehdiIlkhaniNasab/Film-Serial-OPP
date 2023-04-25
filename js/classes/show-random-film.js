class RandomFilms{
    constructor(films){
        this.films = films.sort((a,b) => 0.5 - Math.random()).slice(0,5)
        this.wrapper = document.querySelector('.aside-visited ul')
        this.goToSinglePage = this.goToSinglePage.bind(this)
        window.goToSinglePage = this.goToSinglePage
        this.render()
    }

    render(){
        this.showRandomFilms()
    }

    showRandomFilms(){
        this.wrapper.innerHTML = ''
        this.films.forEach(film => {
            this.wrapper.insertAdjacentHTML('beforeend', `
            <li>
                <div class="visited-right" >
                    <img src="${film.imgSrc}" alt="" class="" width="100" height="100">
                </div>
                <div class="visited-details">
                    <p class="m-0" id="${film.id}" onclick="goToSinglePage(event)">${film.title}</p>
                    <div class="">
                        <p class="">انتشار :</p>
                        <p class="">${film.date}</p>
                    </div>
                </div>
            </li>
            `)
        });
    }

    goToSinglePage(event) {
        window.location.href = `single.html?id=${event.target.id}`
    }
}

export default RandomFilms