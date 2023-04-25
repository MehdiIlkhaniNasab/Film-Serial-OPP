import categoies from "./DB/categorys.js";
import { filmData } from "./DB/film-data.js";
import Categories from "./classes/show-category.js";
import RandomFilms from "./classes/show-random-film.js";
import ShowDetailsFilm from "./classes/singlePage/show-details-film.js";


window.addEventListener('load', () => {
    const url = new URLSearchParams(location.search)
    const filmId = url.get('id')
    const showDetailsFilm = new ShowDetailsFilm(filmId,filmData,categoies)

})