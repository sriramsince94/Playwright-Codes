const { test, expect } = require('@playwright/test')//expect is the assertion 
test('locators' ,async ({page})=>{
await page.goto("https://selenium.qabible.in/simple-form-demo.php");
const message=page.locator('#single-input-field')//id locator first method with hashtag
page.locator('.form-control')//if it is a class we can use dot (another method)
page.locator('//button[@id="button-one"]')//x path syntax ://tagname[@attribute='value']
await message.type("Hello World")//Web element command 1 type won't overwrite the existing data
await message.fill("Hello Universe")//Web element command 2 fill is used to input fresh data
await page.locator('//button[@id="button-one"]').click()//click simulation-await should be there when writing webelement command
page.getByRole ('button',{//special locator make use of ARIA application
    name:'Get Total'
}).click()
page.getByText('Get Total')//another method for Get total- works same as getbyrole
page.locator('.form-control').first()
page.locator('.form-control').nth(3)
page.locator('.form-control').last()
page.waitForLoadState('networkidle')
page.locator('#single-input-field')
});
