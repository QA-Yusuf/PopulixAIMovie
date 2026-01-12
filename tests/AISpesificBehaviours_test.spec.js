//impor dari file myAIFixtures
const { test, expect } = require('../fixtures/myAIFixtures');


//Variabel utk 3x looping
const iterations = [1, 2, 3];
//Untuk looping 1-3 akan lakukan hal yang sama
for (const i of iterations) {
  //TC positif no.6 terkait peran AI dalam pencarian film (tes konsistensi determinasi)
  test(`TCP06_Successfully Search AI Consistency - Iteration ${i}`, async ({ loggedSearchPage }) => {
    //Jalankan loggedSearchPage utk input "bad horror film in 2020"
    await loggedSearchPage.searchFor('bad horror film in 2020');
    //Jalankan assertion di loggedSearchPage utk verify header"Match Recommendations" terlihat
    await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 }); 
    //Jalankan assertion di loggedSearchPage utk verify genre horror ada (minimal 1)
    await expect(loggedSearchPage.verifyGenreHorror).not.toHaveCount(0);
  });
};


//TC positif no.7 terkait peran AI dalam pencarian film (tes akurasi)
test('TCP07_Successfully Search comedy movies last year', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input
  await loggedSearchPage.searchFor('film comedy last year');
  //Jalankan assertion di loggedSearchPage utk verify header"Match Recommendations" terlihat
  await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 });
  //Jalankan assertion di loggedSearchPage utk verify genre komedi ada (minimal 1)
  await expect(loggedSearchPage.verifyGenreComedy).not.toHaveCount(0);  
  //Jalankan assertion di loggedSearchPage utk verify tahun 2025 ada (minimal 1)
  await expect(loggedSearchPage.verifyYear2025).not.toHaveCount(0);
});


//TC negatif no.7 terkait peran AI dalam pencarian film (tes halusinasi)
test('TCN04_Unsuccessfully Search horror movies and released in 2099', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input
  await loggedSearchPage.searchFor('horror film released in 2099');
  await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 });
  //Jalankan assertion di loggedSearchPage utk verify genre horror ada (minimal 1)
  await expect(loggedSearchPage.verifyGenreHorror).not.toHaveCount(0);  
  ////Jalankan assertion di loggedSearchPage utk verify tahun 2099 ada (minimal 1)
  await expect(loggedSearchPage.verifyYear2099).not.toHaveCount(0);
});
