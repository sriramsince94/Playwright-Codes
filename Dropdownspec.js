const{test}=require('@playwright/test');
test('dropdown',async({page})=>{
await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
const dropdown=page.locator('#dropdowm-menu-1')
await page.pause()//code will run in the debug mode (Play & Pause)
await dropdown.selectOption({index:1});//selecting the index value selecting the second dropdown value
await page.pause()
await dropdown.selectOption({value:'python'})//selecting by value
await page.pause()
await dropdown.selectOption({label:'SQL'})//selecting by text
await page.pause()
});
test('checkboxes',async({page})=>{
await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
const checkbox=page.locator('//input[@value="option-4"]')
checkbox.click()
await page.pause()
console.log(await checkbox.isChecked())
});
test('assertions check',async({page})=>{
await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.htm')
const check=page.locator('//input[@value="option-4"]')
check.click()
console.log(await check.isChecked())
await page.pause()
await expect(check).toBeChecked()//assertion
await page.pause()
});
test.only('radiobuttons',async({page})=>{
await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
const radio=page.locator('//input[@value="blue"]')
radio.click()
await page.pause()
});
