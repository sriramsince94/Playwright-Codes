class Addtocart{
    constructor(page){
        this.page=page

    }
    async addtocart(){
        await this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }
    async cartbutton(){
        await this.page.locator('.shopping_cart_badge').click()
    }

}
module.exports=Addtocart;