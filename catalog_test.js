const assert = require ('assert');

Feature('open pages');

Before(({I}) => {
    I.amOnPage('/');
});

Scenario('user can add seed to cart', async ({ I, mainPage, currentPage }) => {
    await mainPage.addCart();
    const title = await currentPage.getCartTitle();
    assert.deepStrictEqual(title, 'Shopping cart', 'семя добавлено в корзину');
});

Scenario('user can see add seed to compare', async ({ I, mainPage, comparePage}) => {
    await mainPage.addToCompare();
    const k = await comparePage.getTitleComparePage();
    assert.deepStrictEqual(k, 'Compare & Choose the Best', 'семя добавлено в сравнение');
});

Scenario('user can open catalog', async ({ I, mainPage, catalogPage}) => {
    await mainPage.openCatalog();
    const y = await catalogPage.getTitleCatalog();
    assert.deepStrictEqual(y, 'Catalog', 'открыта страница каталога');
});

Scenario('user can open Herbies seedbank', async ({ I, mainPage, seedbanksPage}) => {
    await mainPage.openSeedbank();
    const h = await seedbanksPage.getSeedbankTitle();
    assert.deepStrictEqual(h, 'Herbies', 'открыта страница сидбанка Herbies');
});

Scenario('user can open article', async ({ I, mainPage, blogPage}) => {
    await mainPage.openBlog();
    const w = await blogPage.getBlogTitle();
    assert.deepStrictEqual(w, 'Best Weed Strains for Gaming: Choose One That Suits Your Style', 'открыта страница статьи из блога');
});