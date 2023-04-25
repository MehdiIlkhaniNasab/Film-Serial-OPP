class ShowSlider {
    constructor(films) {
        this.films = films.slice(0, 3)
        this.titleSlider = document.querySelector('#titleSlider')
        this.descSlider = document.querySelector('#descSlider')
        this.dataSlider = document.querySelector('#dataSlider')
        this.imgSlider = document.querySelector('#imgSlider')
        this.nextSlider = document.querySelector('#nextSlider')
        this.prevSlider = document.querySelector('#prevSlider')
        this.sliderInterVal = null
        this.index = 0
        this.render()
    }

    render() {
        this.nextSlider.addEventListener('click', event => {
            this.nextSlide()
        })
        this.prevSlider.addEventListener('click', event => {
            this.prevSlide()
        })
        this.showSlider()
    }

    showSlider() {
            this.imgSlider.src = this.films[this.index].imgSrc
            this.titleSlider.innerHTML = this.films[this.index].title
            this.descSlider.innerHTML = this.films[this.index].description
            this.dataSlider.innerHTML = this.films[this.index].date
    }

    nextSlide() {
        this.index++
        if (this.index >= this.films.length) {
            this.index = 0
        }
        this.showSlider()
    }

    prevSlide() {
        this.index--
        if (this.index < 0) {
            this.index = this.films.length - 1
        }
        this.showSlider()
    }
}

export default ShowSlider