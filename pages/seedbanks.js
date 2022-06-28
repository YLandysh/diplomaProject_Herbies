const { I } = inject();

module.exports = {
    fields: {
        seedbankTitle: '.row > .col-lg-9 > .breadcrumb > .active > span',
    },
    async getSeedbankTitle () {
        const text = await I.grabTextFrom(this.fields.seedbankTitle);
        return text;
    }
}
