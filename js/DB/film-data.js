class Film {
    constructor(id, title, date, imgSrc, description, keyWords, comments, categoryHref, categoryTitle) {
        this.id = id
        this.title = title
        this.date = date
        this.imgSrc = imgSrc
        this.description = description
        this.keyWords = keyWords
        this.comments = comments
        this.categoryHref = categoryHref
        this.categoryTitle = categoryTitle
    }
}

class Comment {
    constructor(id, fullname, email, date, description, categoryHref, categoryTitle, filmId) {
        this.id = id
        this.fullname = fullname
        this.email = email
        this.date = date
        this.description = description
        this.categoryHref = categoryHref
        this.categoryTitle = categoryTitle
        this.parentFilmId = filmId
    }
}


const filmData = [
    new Film('1',
        'فیلم آقای سانسور',
        1398,
        '../../img/cover/1.webp',
        `فیلم آقای سانسور به کارگردانی علی جبارزاده در سال 1398 ساخته شده است. این فیلم محصول کشور ایران و در ژانر کمدی و خانوادگی می‌باشد. در این فیلم محمدرضا فروتن، بهرام افشاری، بهاره رهنما، بهنوش بختیاری، محمود پاک نیت، آریانا مثنوی، امید روحانی، علی مثنوی، گیتی قاسمی، امیر کربلایی زاده، صحرا اسدالهی، امیراشکان مثنوی و علی برقی به هنرمندی پرداخته‌اند.`,
        ['آسانسور', 'کمدی'],
        [new Comment('1', 'مهدی ایلخانی نسب', 'mehdi@gmail.com', '1402', 'سلام، مرسی خیلی فیلم بی معنی بود.', 'comedy', 'کمدی', '1')],
        'comedy',
        'کمدی'),
    new Film('2',
        'فیلم تکخال',
        1399,
        '../../img/cover/2.webp',
        `فیلم تکخال به کارگردانی مجید مافی در سال 1399 ساخته شده است. این فیلم محصول کشور ایران و در ژانر کمدی و خانوادگی می‌باشد. در این فیلم پوریا پورسرخ، سحر قریشی، شبنم قلی خانی، یوسف تیموری و امیر کربلایی زاده به هنرمندی پرداخته‌اند.`,
        ['تکخال', 'درام'],
        [new Comment('1', 'امیر رضا بخشایش', 'amir@gmail.com', '1402', 'سلام، مرسی خیلی فیلم چیز بود.', 'dram', 'درام', '2')],
        'dram',
        'درام'),
    new Film('3',
        ' فیلم پیشی میشی',
        1398,
        '../../img/cover/3.webp',
        `فیلم پیشی میشی به کارگردانی حسین قناعت در سال 1398 ساخته شده است. این فیلم محصول کشور ایران و در ژانر کمدی و خانوادگی می‌باشد. در این فیلم بهاره رهنما، رضا شفیعی جم، نفیسه روشن، ارژنگ امیرفضلی، علی کاظمی، ساعد هدایتی، محمد شیری، یوسف صیادی و صدیقه کیانفر به هنرمندی پرداخته‌اند.`,
        ['پیشی میشی', 'کمدی'],
        [new Comment('1', 'رامین صادقی', 'ramin@gmail.com', '1402', 'خیلی پر بار و مفید.', 'comedy', 'کمدی', '3')],
        'comedy',
        'کمدی'),
]


export  {filmData , Comment}