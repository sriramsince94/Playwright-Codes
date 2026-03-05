const { test, expect } = require('@playwright/test')//import statement (require is used to denote what all are the required things)
test('Browser Context Playwright Test', async ({browser})=>//this is the syntax test('title',async({fixture})
{  
    //Browser is launched
    const context=await browser.newContext();
    //Get the new page created
    const page = await context.newPage();
  await page.goto("https://selenium.qabible.in/");//to access the page 
});
test('Page Playwright Test',async ({page})=>//if async page(fixtures) is called the above 2 const page Browser statements can be removed and 
{
await page.goto("https://selenium.qabible.in/");
console.log( await page.title());//to print 
 await expect(page).toHaveTitle("Obsqura Testing");//assertions used for the expected result validation
});
test('Page Amazon',async({page})=>{
await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=747965765550351366&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007779&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1/");
});
