class Category {
    constructor(id, title, href, count) {
        this.id = id
        this.title = title
        this.hrefEn = href
        this.href = `archive.html?category=${href}`
        this.count = count
    }
}

const categoies = [
    new Category('1', 'کمدی', 'comedy', 2),
    new Category('1', 'درام', 'dram', 1),
    new Category('1', 'اجتماعی', 'social', 0),
    new Category('1', 'عاشقانه', 'love', 0),
]

export default categoies