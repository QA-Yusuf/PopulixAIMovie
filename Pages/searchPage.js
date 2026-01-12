class SearchPage
{
    //Semua locator setelah login
    constructor (page)
    {
        this.page = page;
        //locator utk field search
        this.searchInput = page.locator("//input[@type='text']");
        //locator utk search button
        this.searchButton = page.getByRole('button', { name: 'Search' });
        //locator utk header "Match Recommendations"
        this.matchHeading = page.getByRole('heading', { name: 'Match Recommendations' });
        //locator utk genre horror
        this.verifyGenreHorror = page.getByText(/horror/i);
        //locator utk genre komedi
        this.verifyGenreComedy = page.getByText(/comedy/i);
        //locator utk gender romance
        this.verifyGenreRomance = page.getByText(/romance/i);
        //locator utk film hollywood
        this.verifyFilmHollywood = page.getByText(/hollywood/i);
        //locator utk tahun 2020
        this.verifyYear2020 = page.getByText(/2020/i);
        //locator utk tahun 2024
        this.verifyYear2024 = page.getByText(/2024/i);
        //locator utk tahun 2025
        this.verifyYear2025 = page.getByText(/2025/i);
        //locaator utk tahun 2099
        this.verifyYear2099 = page.getByText(/2099/i);
        //locator utk rating rendah (bintang <5)
        this.verifyLowRating = page.getByText(/⭐\s[1-5]\.\d\/10/);
        //locator utk rating tinggi (bintang >5)
        this.verifyHighRating = page.getByText(/⭐\s[5-9]\.\d\/10/);
        //locator utk item sekolah
        this.verifyItemSchool = page.getByText(/school/i);
        //locator utk item murid
        this.verifyItemStudents = page.getByText(/students/i);
        //locator utk item guru
        this.verifyItemTeacher = page.getByText(/teacher/i);
        //locator utk pencarian acak
        this.verifyRandomSearch = page.getByText(/No movie found matching "asdfghjkl". Try searching for titles like "The Dark Knight", "Inception", or "Superbad"./i);
    }


   //Method utk pencarian
    async searchFor(query) {
        //method utk isi searcch field
        await this.searchInput.fill(query);
        //method utk klik button search
        await this.searchButton.click();
    }

};

//ekspor segala yg di set di file ini
module.exports=SearchPage;