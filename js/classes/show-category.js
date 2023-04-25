class Categories{
    constructor(wrapper,categories){
        this.wrapper = wrapper
        this.categories = categories
        this.render()
    }
    render(){
        this.showCategory()
    }

    showCategory(){
        this.wrapper.innerHTML  = ''
        this.categories.forEach(item => {
            this.wrapper.insertAdjacentHTML('beforeend', `
            <li>
                <i class="fa fa-angle-left"></i>
                <a href="${item.href}" class="category-link">${item.title}</a>
                <div class="badge-custom">
                    <span class="">${item.count}</span>
                </div>
            </li>`)
        });
    }
}


export default Categories