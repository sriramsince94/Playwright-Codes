class Customerdetails{
    constructor(page){
        this.page=page

    }
    async firstname(){
        await this.page.locator('#first-name').fill('sriram')
    }
    async firstname(){
        await this.page.locator('#first-name').fill('sriram')
    }
    async lastname(){

        await this.page.locator('#last-name').fill('V')
    }
    async postcode(){

        await this.page.locator('#postal-code').fill('695009')
        
    }
    async continue(){

        await this.page.locator('#continue').click()
    }
}