//impor dari file myAIFixtures
const { test, expect } = require('../fixtures/myAIFixtures');


//TC Negatif no.1 terkait login
test('TCN01_Unsuccessfully Login by Invalid Credential', async ({ loginPage }) => {
  //Jalankan method goToWeb di loginpage
  await loginPage.goToWeb();
  //Jalankan method loginToweb di loginpage dengan isi value yang salah
  await loginPage.loginToWeb('testmail.com', 'xcd');
  //Jalankan assertion di loginpage utk verify popUp error message
  await expect(loginPage.emailInput).toHaveJSProperty('validity.valid', false);
});


//TC Negatif no.2 terkait login
test('TCN02_Unsuccessfully Login by Null Credential', async ({ loginPage }) => {
  //Jalankan method goToWeb di loginpage
  await loginPage.goToWeb();
  //Jalankan method loginToweb di loginpage dengan isi value empty
  await loginPage.loginToWeb('', '');
  //Jalankan assertion di loginpage utk verify popUp error message
  await expect(loginPage.emailInput).toHaveJSProperty('validity.valid', false);
});


//TC Positif no.1 terkait login
test('TCP01_Successfully Login by Valid Credential', async ({ loginPage }) => {
  //Jalankan method goToWeb di loginpage
  await loginPage.goToWeb();
  //Jalankan method loginToweb di loginpage dengan isi value yang benar
  await loginPage.loginToWeb('test@mail.com', '8f4&nVO">^82');
  ////Jalankan assertion di loginpage utk verify text "Movie Recommender" yg muncul
  await expect(loginPage.headerWeb).toContainText('Movie Recommender');
});