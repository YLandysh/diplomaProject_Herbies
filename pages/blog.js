const { I } = inject();

module.exports = {
    fields: {
        blogTitle: '.d-flex > .d-none > .breadcrumb > .active > span',
    },
    async getBlogTitle () {
        const text = await I.grabTextFrom(this.fields.blogTitle);
        return text;
    }
}
