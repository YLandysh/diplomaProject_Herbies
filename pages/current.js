const { I } = inject();

module.exports = {
    fields: {
        cartTitle: '.d-flex > .d-none > .breadcrumb > .active > span',
    },
    async getCartTitle () {
        const text = await I.grabTextFrom(this.fields.cartTitle);
        return text;
    }
  // insert your locators and methods here
}
