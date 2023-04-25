import categoies from "./DB/categorys.js";
import { filmData } from "./DB/film-data.js";
import Categories from "./classes/show-category.js";
import ShowSlider from "./classes/indexPage/show-slider.js";
import LastedFilms from "./classes/indexPage/show-lasted-films.js";




window.addEventListener('load', () => {
    const showSlider = new ShowSlider(filmData)
    const lastedFilms = new LastedFilms(filmData)
})