import categoies from "./DB/categorys.js";
import { filmData } from "./DB/film-data.js";
import Categories from "./classes/show-category.js";
import ShowSlider from "./classes/indexPage/show-slider.js";
import {ArchiveFilms, Breadcrumb} from "./classes/archivePage/showArchiveFilms.js"




window.addEventListener('load', () => {
    const locationSearch = location.search
    const url = new URLSearchParams(location.search)
    const urlParam = url.get('category')
    let targetCategory = null
    if(urlParam){
        targetCategory = urlParam

    }else{
        targetCategory = null
    }
    const archiveFilms = new ArchiveFilms(filmData, targetCategory,categoies)
    const breadcrumb = new Breadcrumb(targetCategory, categoies)
})