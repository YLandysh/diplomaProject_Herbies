const { I } = inject();

module.exports = {
    fields: {
        compareTitle: '.d-flex > .d-none > .breadcrumb > .active > span',
    },
    async getTitleComparePage () {
        const text = await I.grabTextFrom(this.fields.compareTitle);
        return text;
    }
  // insert your locators and methods here
}
