class checkout{
    constructor(page){
        this.page=page
    }
    async checkouturl(){

        await this.page.locator('#checkout').click()
    }
}