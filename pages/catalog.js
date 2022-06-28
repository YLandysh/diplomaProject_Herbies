const { I } = inject();

module.exports = {
    fields: {
        catalogTitle: '.col-12 > div > .breadcrumb > .active > span',
    },
    async getTitleCatalog () {
        const text = await I.grabTextFrom(this.fields.catalogTitle);
        return text;
    }
  // insert your locators and methods here
}
