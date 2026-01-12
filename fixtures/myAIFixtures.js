//Import tools playwright
const base = require('@playwright/test');
//Import loginpage
const LoginPage = require('../Pages/loginPage');
//Import searchpage
const SearchPage = require('../Pages/searchPage');


//Ekspor playwright versi yang sudah dimodifikasi
exports.test = base.test.extend({
    // Fixture loginpage
    loginPage: async ({ page }, use) => {
        //Variabel untuk jalankan loginpage
        const login = new LoginPage(page); 
        //Transfer login ke setiap file yg panggil loginPage
        await use(login);
    },


    // Fixture untuk SearchPage
    loggedSearchPage: async ({ page }, use) => {
        //Variabel untuk jalankkan searchpage
        const login = new LoginPage(page);
        const search = new SearchPage(page);

        //Set method auto login
        await login.goToWeb();
        await login.loginToWeb('test@mail.com', '8f4&nVO">^82');
        
        //Set assertion setelah login
        await base.expect(login.headerWeb).toContainText('Movie Recommender');

        //Transfer method loggedsearchpage ke setiap yang memanggil
        await use(search);
    },
});

//ekspor segala yg di set di file ini
exports.expect = base.expect;