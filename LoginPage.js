const Addtocart = require("./Addtocart")

class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.signin=page.locator('#login-button')
        return new Addtocart(this.page)//chaining 
    }
    async accessurl(){
        await this.page.goto('https://www.saucedemo.com');
        
}
async enterusername(){
await this.username.fill('standard_user')
return this
    }
    async enterpassword(){
        await this.password.fill('secret_sauce')
        return this

    }
    async signin(){
        await this.signin.click()
        return new Addtocart(this.page)

    }
}
module.exports=LoginPage;