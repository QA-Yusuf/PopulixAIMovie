class LoginPage
{
    //Semua locator untuk login
    constructor (page)
    {
        this.page=page
        //locator utk email field
        this.emailInput=page.getByRole('textbox', { name: 'Email' });
        //locator utk password field
        this.passwordInput=page.getByRole('textbox', { name: 'Password' });
        //locator utk sign in button
        this.loginButton=page.getByRole('button', { name: 'Sign In' });
        //locator utk header "movie recommender"
        this.headerWeb=page.getByRole('heading', { name: 'Movie Recommender' });
    }


    //Method utk open URL
    async goToWeb ()
    {
        //Direct ke URL tsb
        await this.page.goto('https://movie-finder-d128b.web.app/login');
    }


    //Method utk login (isi kredensial)
    async loginToWeb(email, password)
    {
        //Method utk isi email
        await this.emailInput.fill(email);
        //Method utk isi password
        await this.passwordInput.fill(password);
        //Method utk klik signIn
        await this.loginButton.click();
    }

};

//Ekspor segala yg di set di file ini
module.exports=LoginPage;
