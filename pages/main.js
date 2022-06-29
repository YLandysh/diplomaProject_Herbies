const { I } = inject();

module.exports = {
    button: {
        btnPopupEmail: '#body > .sp-form-outer > #sp-form-167389 > .sp-form-fields-wrapper > .sp-btn-close',
        btnPopupAge: '.disclaimer-popup__overlay > .disclaimer-popup > .disclaimer-popup__wrapper > .disclaimer-popup__accept > .pseudo-checkbox',
        collection: '.row > .col-12 > .desktop-links > .desktop-links__list > .desktop-links__item:nth-child(2)',
        btnAdd: '.category-item__container:nth-child(2) > .category-item__inner > .category-item__product-list-price > .product-list-price > .quick-buy-btn',
        btnCart: '.col-12 > .header__top-container > .header-btns > #topline_basket_btn > svg',

        btnAddToCompare: '.products-widgets__container:nth-child(2) > .widget__container:nth-child(2) > .products-carousel__container:nth-child(1) > .products-carousel__glide-track:nth-child(1) > .products-carousel__glide-slides:nth-child(1) > .products-carousel__item:nth-child(3) > .products-carousel__item-inner:nth-child(1) > .action-buttons:nth-child(2) > .compare__link:nth-child(2) > svg:nth-child(1)',
        btnOpenCompare: '.col-12 > .header__top-container > .header-btns > .header-btns__item:nth-child(3) > svg',

        btnOpenCatalog: '.row > .col-12 > .desktop-links > .desktop-links__list > .desktop-links__item:nth-child(4)',

        openSeedbanks: '.row > .col-12 > .desktop-links > .desktop-links__list > .desktop-links__item:nth-child(6)',
        openSeedbankHerbies: '.row > .col-9 > .header-seedbanks__container > .header-seedbanks__list > .header-seedbanks__link:nth-child(2)',

        blogs: '.row > .col-12 > .desktop-links > .desktop-links__list > .desktop-links__item:nth-child(8)',
        blog: '.col-3:nth-child(8) > .blog-overlay__item > a > .blog-overlay__img-container > .blog-overlay__preview > .blog-overlay__btn',
    },
    async addCart () {
        I.click(this.button.btnPopupAge);
        //I.waitForClickable(this.button.btnPopupEmail)
       // I.click(this.button.btnPopupEmail);
        I.click(this.button.collection);
        I.click(this.button.btnAdd);
        //I.waitForElement(this.button.btnCart, 30);
        I.wait(5);
        I.click(this.button.btnCart);
    },
    async addToCompare () {
        I.click(this.button.btnPopupAge);
        I.click(this.button.btnAddToCompare);
        I.click(this.button.btnOpenCompare);
    },
    async openCatalog () {
        I.click(this.button.btnPopupAge);
        I.click(this.button.btnOpenCatalog);
    },
    async openSeedbank () {
        I.click(this.button.btnPopupAge);
        I.click(this.button.openSeedbanks);
        I.click(this.button.openSeedbankHerbies);
    },
    async openBlog () {
        I.click(this.button.btnPopupAge);
        I.click(this.button.blogs);
        I.click(this.button.blog);
    },
}
