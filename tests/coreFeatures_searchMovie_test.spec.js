//impor dari file myAIFixtures
const { test, expect } = require('../fixtures/myAIFixtures');


//TC positif no.2 terkait fitur inti pencarian film
test('TCP02_Successfully Search Genre Movie Romance', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input "romance"
  await loggedSearchPage.searchFor('romance');
  //Jalankan assertion di loggedSearchPage utk verify header"Match Recommendations" terlihat
  await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 });  
  //Jalankan assertion di loggedSearchPage utk verify genre romance ada (minimal 1)
  await expect(loggedSearchPage.verifyGenreRomance).not.toHaveCount(0);
});


//TC positif no.3 terkait fitur inti pencarian film
test('TCP03_Successfully Search movies genre horror, top rating, and released in 2020', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input "best horror film in 2020"
  await loggedSearchPage.searchFor('best horror film in 2020');
  //Jalankan assertion di loggedSearchPage utk verify header"Match Recommendations" terlihat
  await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 });
  //Jalankan assertion di loggedSearchPage utk verify genre horror ada (minimal 1)
  await expect(loggedSearchPage.verifyGenreHorror).not.toHaveCount(0);
  //Jalankan assertion di loggedSearchPage utk verify tahun 2020 ada (minimal 1)
  await expect(loggedSearchPage.verifyYear2020).not.toHaveCount(0);
  //Jalankan assertion di loggedSearchPage utk verify rating bintang 5-10 ada (minimal 1)
  await expect(loggedSearchPage.verifyHighRating).not.toHaveCount(0);
});


//TC positif no.4 terkait fitur inti pencarian film
test('TCP04_Successfully Search movies hollywood with bad rating, and released in 2024', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input "bad hollywood film in 2024"
  await loggedSearchPage.searchFor('bad hollywood film in 2024');
  //Jalankan assertion di loggedSearchPage utk verify header"Match Recommendations" terlihat
  await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 });
  //Jalankan assertion di loggedSearchPage utk verify film hollywood ada (minimal 1)
  await expect(loggedSearchPage.verifyFilmHollywood).not.toHaveCount(0);
  //Jalankan assertion di loggedSearchPage utk verify tahun 2024 ada (minimal 1)  
  await expect(loggedSearchPage.verifyYear2024).not.toHaveCount(0);
  //Jalankan assertion di loggedSearchPage utk verify rating bintang 1-5 ada (minimal 1)
  await expect(loggedSearchPage.verifyLowRating).not.toHaveCount(0);
});


//TC positif no.5 terkait fitur inti pencarian film
test('TCP05_Successfully Search movies with school, students, and teacher', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input "film about school"
  await loggedSearchPage.searchFor('film about school');
  //Jalankan assertion di loggedSearchPage utk verify header"Match Recommendations" terlihat
  await expect(loggedSearchPage.matchHeading).toBeVisible({ timeout: 900000 });
  //Jalankan assertion di loggedSearchPage utk verify judul film dengan keyword sekolah ada (minimal 1)
  await expect(loggedSearchPage.verifyItemSchool).not.toHaveCount(0); 
  //Jalankan assertion di loggedSearchPage utk verify judul film dengan keyword murid ada (minimal 1) 
  await expect(loggedSearchPage.verifyItemStudents).not.toHaveCount(0);
  //Jalankan assertion di loggedSearchPage utk verify judul film dengan keyword guru ada (minimal 1)
  await expect(loggedSearchPage.verifyItemTeacher).not.toHaveCount(0);
});


//TC negatif no.3 terkait fitur inti pencarian film
test('TCN03_Unsuccessfully Search movies with random text', async ({ loggedSearchPage }) => {
  //Jalankan loggedSearchPage utk input "asdfghjkl"
  await loggedSearchPage.searchFor('asdfghjkl');
  //Jalankan assertion di loggedSearchPage utk verify error message pencarian acak muncul
  await expect(loggedSearchPage.verifyRandomSearch).toContainText('No movie found matching "asdfghjkl". Try searching for titles like "The Dark Knight", "Inception", or "Superbad".'); 
});